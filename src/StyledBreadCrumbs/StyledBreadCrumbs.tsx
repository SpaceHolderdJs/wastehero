import React from "react";
import { Breadcrumb } from "antd";
import styled from "styled-components";
import { ArrowLeftOutlined } from "@ant-design/icons";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import BreadcrumbSeparator from "antd/lib/breadcrumb/BreadcrumbSeparator";

interface props {
  showArrow?: boolean;
  defaultvalue?: boolean;
  breadCrumbs?: string[];
  clickHandlers?: any[];
  onBack?: any;
}

export const StyledBreadCrumbs = ({
  breadCrumbs,
  showArrow = false,
  defaultvalue = breadCrumbs && breadCrumbs.length > 2,
  onBack,
}: props) => {
  const itemsLength = breadCrumbs ? breadCrumbs?.length : 0;

  const BreadCrumbCutomItem = styled(BreadcrumbItem)`
    cursor: ${(props) => (props.onClick ? "pointer" : "default")};
  `;

  const LastBreadcrumbItem = styled(BreadCrumbCutomItem)`
    font-weight: bold;
    &:before {
      content: "";
      display: ${itemsLength > 1 ? "block" : ""};
    }
  `;

  return (
    <Breadcrumb separator="">
      {breadCrumbs &&
        breadCrumbs.map((breadCrumb: string, i: number) =>
          i === breadCrumbs.length - 1 ? (
            <LastBreadcrumbItem onClick={() => alert("I have cursor pointer!")}>
              {showArrow && (
                <ArrowLeftOutlined onClick={(e) => onBack && onBack(e)} />
              )}{" "}
              {breadCrumb}
            </LastBreadcrumbItem>
          ) : (
            <>
              <BreadCrumbCutomItem>{breadCrumb}</BreadCrumbCutomItem>
              {i !== itemsLength - 2 && (
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
              )}
            </>
          )
        )}
    </Breadcrumb>
  );
};

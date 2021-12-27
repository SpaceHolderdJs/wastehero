import React from "react";
import { Button, Card } from "antd";
import { blue } from "@ant-design/colors";
import styled from "styled-components";

interface props {
  variant?: string;
  bold?: boolean;
  children?: any;
}

export const StyledTag = ({
  variant = "default",
  bold = false,
  children,
}: props) => {
  const DefaultButton = styled(Button)`
    background: ${blue[1]};
    font-weight: ${bold ? "bold" : ""};
    text-align: center;
  `;

  const BorderedButton = styled(DefaultButton)`
    border: ${bold ? 3 : 2}px solid ${blue[3]};
    background: white;
  `;

  const tags: any = {
    default: <DefaultButton>{children && children}</DefaultButton>,
    bordered: <BorderedButton>{children && children}</BorderedButton>,
  };

  return tags[variant];
};

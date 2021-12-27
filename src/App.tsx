import React from "react";
import { Breadcrumb, Card } from "antd";
import { StyledTag } from "./StyledTag/StyledTag";
import { StyledBreadCrumbs } from "./StyledBreadCrumbs/StyledBreadCrumbs";

import "./App.scss";

function App() {
  const crumbs = [
    "Settings",
    "Company settings",
    "Project settings",
    "4th path is here",
  ];

  return (
    <div className="App">
      <Card>
        <h1>Default tag</h1>
        <StyledTag>Styled Tag</StyledTag>
      </Card>
      <Card>
        <h1>Bordered tag</h1>
        <StyledTag variant="bordered">Styled Tag</StyledTag>
      </Card>
      <Card>
        <h1>Bordered and bold</h1>
        <StyledTag variant="bordered" bold={true}>
          Styled Tag
        </StyledTag>
      </Card>

      <Card>
        <h1>Simple case</h1>
        <StyledBreadCrumbs breadCrumbs={crumbs.slice(0, 1)} />
      </Card>
      <Card>
        <h1>Simple case with arrow</h1>
        <StyledBreadCrumbs breadCrumbs={crumbs.slice(0, 1)} showArrow={true} />
      </Card>
      <Card>
        <h1>Case with length more than 1</h1>
        <StyledBreadCrumbs breadCrumbs={crumbs.slice(0, 2)} showArrow={true} />
      </Card>
      <Card>
        <h1>Case with length more than 2</h1>
        <StyledBreadCrumbs breadCrumbs={crumbs.slice(0, 3)} showArrow={true} />
      </Card>
      <Card>
        <h1>Case with length more than 3 and onBack</h1>
        <StyledBreadCrumbs
          breadCrumbs={crumbs.slice(0, 4)}
          showArrow={true}
          onBack={() => alert("Back!")}
        />
      </Card>
    </div>
  );
}

export default App;

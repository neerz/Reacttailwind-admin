import React from "react";
import { Card, Row, Col } from "antd";

import TableBasic from "./Basic";
import TableSortable from "./Sortable";
import TableExpanable from "./Expanable";
import TableFixedColumn from "./FixedColumn";
import TableSelection from "./Selection";

const ComponentTable = props => {
  return (
    <React.Fragment>
      <Row gutter={[10, 10]}>
        <Col span={24}>
          <Card title="Basic">
            <TableBasic />
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Sortable">
            <TableSortable />
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Expanable">
            <TableExpanable />
          </Card>
        </Col>
        <Col span={24}>
          <Card title="FixedColumn">
            <TableFixedColumn />
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Selection">
            <TableSelection />
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ComponentTable;

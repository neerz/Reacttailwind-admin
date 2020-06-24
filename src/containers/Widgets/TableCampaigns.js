import React from "react";
import Card from "../../components/Card";
import Table from "../../components/Table";

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

export default props => {
  return (
    <Card title="Marketing Campaigns">
      <Table
        columns={[
          {
            title: "CAMPAIGN",
            key: "campaign",
            render: (text, record) => (
              <div>
                <i class="fab fa-cc-paypal pr-2 text-indigo-500" />
                {text}
              </div>
            )
          },
          {
            title: "GROWTH",
            key: "growth",
            render: text => (
              <div>
                <i class="fas fa-angle-double-up pr-2 text-green-500" />
                {text}
              </div>
            )
          },
          {
            title: "CHARGES",
            key: "charges"
          },
          {
            title: "STATUS",
            key: "status",
            render: text => <div className="text-green-500">{text}</div>
          },
          {
            title: "ACTION",
            key: "action",
            render: (text, record) => <i className="fas fa-ellipsis-v ml-8" />
          }
        ]}
        dataSource={Array(5)
          .fill({})
          .map(obj => ({
            campaign: "Paypal",
            growth: "30%",
            charges: `$${random(100, 999)}`,
            status: "Active"
          }))}
      />
    </Card>
  );
};

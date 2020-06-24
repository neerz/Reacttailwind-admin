import React from "react";
import Card from "../../components/Card";
import Table from "../../components/Table";

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const imageAvatar =
  "https://avatars0.githubusercontent.com/u/810438?s=460&u=4e652785fe5aa4aae075c40815741e8721f11fd5&v=4";

export default props => {
  return (
    <Card title="Stats">
      <Table
        columns={[
          {
            title: "Profile",
            key: "profile",
            render: (text, record) => (
              <div className="flex items-center">
                <img
                  src={imageAvatar}
                  alt=""
                  className="w-8 h-8 rounded-full mr-2"
                />
                <p className="text-sm m-0">{text}</p>
              </div>
            )
          },
          {
            title: "Stat",
            key: "stat",
            render: text => (
              <div className="w-20 h-2 rounded bg-gray-300 shadow-inner overflow-hidden">
                <div
                  className={`animated slideInLeft w-${Math.floor(
                    (text / 100) * 12
                  )}/12 h-2 rounded bg-green-400 shadow-md`}
                />
              </div>
            )
          },
          {
            title: "Value",
            key: "value"
          }
        ]}
        dataSource={Array(5)
          .fill({})
          .map(obj => ({
            profile: "Dan Abramov",
            stat: random(10, 100),
            value: `$${random(100, 999)}`
          }))}
        hideHeader
      />
    </Card>
  );
};

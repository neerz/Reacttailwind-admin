import React from "react";
import Card from "../../components/Card";
import Line from "../../components/Charts/Line";
import Doughnut from "../../components/Charts/Doughnut";
import Bar from "../../components/Charts/Bar";
import Select from "../../components/Select";
import Table from "../../components/Table";
import TableCampaigns from "./TableCampaigns";
import TableStats from "./TableStats";

const WidgetCard = ({
  title,
  name = "name",
  value = "20 K",
  icon = "fas fa-shopping-bag",
  badgeColor = "bg-blue-500"
}) => (
  <Card title={title}>
    <div className="flex flex-col items-center p-4">
      <div
        className={`flex justify-center ${badgeColor} rounded-full text-white w-12 h-12`}
      >
        <i className={`${icon} fa-lg self-center`} />
      </div>
      <p className="text-2xl font-bold m-0 mt-2">{value}</p>
      <p className="text-base m-0">{name}</p>
    </div>
  </Card>
);

const WidgetLineChart = props => (
  <Card>
    <div className="flex flex-row w-full items-center p-6">
      <div className="flex justify-center bg-red-500 rounded-full text-white w-12 h-12">
        <i className="fas fa-user-alt fa-lg self-center" />
      </div>
      <div className="ml-4">
        <p className="text-2xl font-bold m-0">45.6k</p>
        <p className="text-base m-0">New Users</p>
      </div>
    </div>
    <Line />
  </Card>
);

const WidgetDoughnutChart = props => (
  <Card>
    <div className="flex flex-row w-full items-center p-6">
      <div className="flex flex-col">
        <p className="text-2xl font-bold m-0">100K</p>
        <p className="text-base m-0">Product Sales</p>
      </div>
      <Doughnut />
    </div>
  </Card>
);

const WidgetList = ({ title, data = [], options = [] }) => {
  return (
    <Card
      title={title}
      action={
        <div className="p-2">
          <Select>
            {options.map(option => (
              <option value={option}>{option}</option>
            ))}
          </Select>
        </div>
      }
    >
      <table className="w-full">
        <tbody>
          {data.map(
            ({
              value = 0,
              icon = "fab fa-ebay",
              badgeColor = "bg-blue-500",
              name = "Item name",
              description = "description"
            }) => (
              <tr className="h-16 hover:bg-gray-200">
                <td className="pl-4 w-10">
                  <div
                    className={`flex justify-center ${badgeColor} rounded-full text-white w-10 h-10`}
                  >
                    <i className={`${icon} fa-lg self-center`} />
                  </div>
                </td>
                <td className="pl-4">
                  <p className="text-base m-0">{name}</p>
                  <p className="text-sm text-gray-500 m-0">{description}</p>
                </td>
                <td className="pr-4 text-right">
                  <p className="text-sm font-bold m-0">{value}</p>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Card>
  );
};

const Widgets = () => {
  return (
    <React.Fragment>
      <div className="animated fadeIn grid grid-cols-12 gap-4 md:gap-6 lg:gap-8">
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <WidgetLineChart />
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <WidgetDoughnutChart />
        </div>

        <div className="col-span-12 md:col-span-4">
          <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8">
            <div className="col-span-6 md:col-span-6">
              <WidgetCard
                name="New Users"
                icon="fas fa-user-friends"
                value="1.5K"
                badgeColor="bg-red-500"
              />
            </div>
            <div className="col-span-6 md:col-span-6">
              <WidgetCard
                name="New Orders"
                icon="fas fa-shopping-bag"
                value="4.2K"
                badgeColor="bg-orange-500"
              />
            </div>
            <div className="col-span-6 md:col-span-6">
              <WidgetCard
                name="Balances"
                icon="fas fa-money-bill-alt"
                value="902K"
                badgeColor="bg-green-500"
              />
            </div>
            <div className="col-span-6 md:col-span-6">
              <WidgetCard
                name="Benefits"
                icon="fas fa-money-bill-wave-alt"
                value="34K"
                badgeColor="bg-teal-500"
              />
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-8 lg:col-span-3">
          <WidgetList
            title="Transaction Types"
            data={[
              {
                value: "91K",
                badgeColor: "bg-red-500",
                icon: "fab fa-cc-amazon-pay",
                name: "Amazon pay",
                description: "12K new"
              },
              {
                value: "16K",
                badgeColor: "bg-blue-500",
                icon: "fab fa-cc-mastercard",
                name: "Mastercard",
                description: "2K New"
              },
              {
                value: "44K",
                badgeColor: "bg-green-500",
                icon: "fab fa-cc-visa",
                name: "Visa",
                description: "5K New"
              },
              {
                value: "32K",
                badgeColor: "bg-orange-500",
                icon: "fab fa-cc-paypal",
                name: "Paypal",
                description: "7K New"
              }
            ]}
            options={["2020", "2019", "2018", "2017"]}
          />
        </div>

        <div className="col-span-12 md:col-span-3">
          <Card>
            <div className="flex flex-col p-4 items-center">
              <p className="text-2xl font-bold m-0 py-2">3.2k</p>
              <p className="text-base m-0">New Orders</p>
            </div>
            <div className="w-full flex justify-center">
              <Bar />
            </div>
          </Card>
        </div>

        <div className="col-span-12 md:col-span-6">
          <TableCampaigns />
        </div>

        <div className="col-span-12 md:col-span-4">
          <TableStats />
        </div>

        <div className="col-span-12">
          <Card title="New Users">
            <div className="flex flex-col p-4 items-center">
              <div className="flex justify-center bg-red-500 rounded-full text-white w-16 h-16">
                <i className="fas fa-user-alt fa-2x self-center" />
              </div>
              <p className="text-2xl font-bold m-0 py-2">45.6k</p>
              <p className="text-base m-0">New Users</p>
            </div>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Widgets;

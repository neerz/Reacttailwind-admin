import React from "react";
import Card from "../../components/Card";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="animated fadeIn grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {new Array(100).fill(0).map(i => (
          <Card>xxxx</Card>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Dashboard;

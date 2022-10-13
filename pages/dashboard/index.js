import React, { useState } from "react";
import Layout from "@/components/dashboard/layout";
import Statistic from "@/components/dashboard/components/statistic";

const Dashboard = () => {
  const [sort, setSort] = useState("popular");

  const sortBy = (e) => {
    setSort(e.target.value);
    console.log(sort);
  };

  return (
    <Layout title="Dashboad - Home">
      <div className="container">
        <div className="bg-white p-3 mb-3 rounded-3 shadow-sm">
          <div className="d-flex justify-content-between align-items-baseline py-2">
            <div className="h5">Campaign</div>
            <div>
              <form>
                <select
                  className="form-control rounded-3"
                  value={sort}
                  onChange={sortBy}
                  style={{ border: "1px solid" }}
                >
                  <option value="popular">Popular</option>
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                </select>
              </form>
            </div>
          </div>
          <div>
            <Statistic />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

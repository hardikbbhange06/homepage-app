import React from "react";
import { UsergroupDeleteOutlined } from "@ant-design/icons";
import { Card, Space, Statistic, Typography } from "antd";
import "./Clients.css";

function Clients() {
  return (
    <div className="bg">
      <div className="nn">
        <div className="hoo">
          <div className="aall">
            <div>
              <br />
            </div>
            <div className="Buu">
              <Typography.Title className="ovv" level={1}>
                Over <span className="red"> 1.5 </span> lac Happy Clients
              </Typography.Title>
              <Typography level={1}>
                Here s what they have to say about their BurlyCare experience.
              </Typography>
            </div>
            <div className="ku">
              <Card>
                <Typography.Title level={1}>Kushal Tiwari</Typography.Title>
                <Typography level={1}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;

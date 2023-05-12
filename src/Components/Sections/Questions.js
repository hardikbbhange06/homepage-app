import React from "react";
import { QuestionCircleFilled } from "@ant-design/icons";
import { Card, Space, Typography } from "antd";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "./Questions.css";

function Questions() {
  return (
    <div className="nnnn">
      <div className="nnn">
        <div className="hooo">
          <div className="Buuu">
            <Typography.Title level={1}>
              BurlyCare in Questions
            </Typography.Title>
            <Typography level={1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod <br />
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim <br />
              veniam, quis nostrud exercitation ullamco laboris nisi
            </Typography>
          </div>
          <Space direction="horizontal" size={50}>
            <Card className="ca2">
              <QuestionCircleFilled
                style={{
                  color: " #161c32",
                  backgroundColor: "#ffcdd2",
                  display: "fle",
                  borderRadius: 20,
                  borderColor: "red",
                  fontSize: 50,
                  padding: 8,
                  height: 63,
                  width: 63,
                }}
              />

              <Typography.Title color="#161c32" level={1}>
                How Burlycare takes care of patients on the day of the surgery?
              </Typography.Title>
              <Typography color="#161c32" level={1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </Typography>
            </Card>

            <Card className="ca2">
              <QuestionCircleFilled
                style={{
                  color: " #161c32",
                  backgroundColor: "#ffcdd2",
                  display: "fle",
                  borderRadius: 20,
                  borderColor: "red",
                  fontSize: 50,
                  padding: 8,
                  height: 63,
                  width: 63,
                }}
              />

              <Typography.Title color="#161c32" level={1}>
                How Burlycare takes care of patients on the day of the surgery?
              </Typography.Title>
              <Typography color="#161c32" level={1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </Typography>
            </Card>
          </Space>
          <Space direction="horizontal" size={50}>
            <Card className="ca2">
              <QuestionCircleFilled
                style={{
                  color: " #161c32",
                  backgroundColor: "#ffcdd2",
                  display: "fle",
                  borderRadius: 20,
                  borderColor: "red",
                  fontSize: 50,
                  padding: 8,
                  height: 63,
                  width: 63,
                }}
              />

              <Typography.Title color="#161c32" level={1}>
                How Burlycare takes care of patients on the day of the surgery?
              </Typography.Title>
              <Typography color="#161c32" level={1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </Typography>
            </Card>

            <Card className="ca2">
              <QuestionCircleFilled
                style={{
                  color: " #161c32",
                  backgroundColor: "#ffcdd2",
                  display: "fle",
                  borderRadius: 20,
                  borderColor: "red",
                  fontSize: 50,
                  padding: 8,
                  height: 63,
                  width: 63,
                }}
              />

              <Typography.Title color="#161c32" level={1}>
                How Burlycare takes care of patients on the day of the surgery?
              </Typography.Title>
              <Typography color="#161c32" level={1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </Typography>
            </Card>
          </Space>
        </div>
      </div>
      <div  className="b111" >
        <Button  variant="contained">Contained</Button>
      </div>
    </div>
  );
}

export default Questions;

//
// export default Questions

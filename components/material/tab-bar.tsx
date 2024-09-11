"use client";

import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Skills } from "../custom/skill-section";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabBar() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{ color: "black" }}
          centered
        >
          <Tab
            label="Multinational company's"
            {...a11yProps(0)}
            sx={{
              color: "#14213D",
              fontSize: "1.2rem", // Adjust the font size here as needed
            }}
          />
          <Tab
            label="National company's"
            {...a11yProps(1)}
            sx={{
              "&.Mui-selected": { color: "#14213D" },
              fontSize: "1.2rem", // Adjust the font size here as needed
            }}
          />
          <Tab
            label="StartUps"
            {...a11yProps(2)}
            sx={{
              "&.Mui-selected": { color: "#14213D" },
              fontSize: "1.2rem", // Adjust the font size here as needed
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <Skills
            skill="Java Developer"
            company="Google"
            desc="We are seeking a skilled Java developer to join our dynamic team. The ideal candidate will have strong expertise in Java development, with a focus on building scalable and high-performance applications."
          />
          <Skills
            skill="React Developer"
            company="Facebook"
            desc="As a React Developer, you will be responsible for designing, developing, and implementing user interface components using React.js concepts and workflows such as Redux, Flux, and Webpack."
          />
          <Skills
            skill="Android Developer"
            company="Microsoft"
            desc="We are committed to creating innovative solutions that enhance user experiences and drive business growth. As an Android Developer, you will have the opportunity to work with a talented team in a dynamic and collaborative environment."
          />
          <Skills
            skill="IOS Developer"
            company="Apple"
            desc="We are passionate about leveraging the latest technologies to deliver high-quality applications to our users. As an iOS Developer, you will have the opportunity to work on exciting projects and contribute to the success of our team."
          />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="flex  items-center justify-center flex-wrap gap-6">
          <Skills
            skill="Database Administrate"
            company="Oracle"
            desc="We are dedicated to providing innovative solutions to our clients and ensuring the reliability and security of their data systems. As a Database Administrator, you will play a crucial role in managing and optimizing our database infrastructure to support our business operations."
          />
          <Skills
            skill="DevOps"
            company="cognizant"
            desc=" We are committed to delivering high-quality products and services to our clients by leveraging DevOps principles and practices. As a DevOps Engineer, you will play a crucial role in building and maintaining the infrastructure and tools necessary to support our development and operations teams."
          />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="flex items-center justify-center">
          <Skills
            skill="Cyber security"
            company="IBM"
            desc="We provide comprehensive cybersecurity solutions to clients across various industries, ensuring their digital assets remain secure and resilient. As a Cybersecurity Analyst, you will be an integral part of our team, safeguarding our clients' systems and information from cyber attacks."
          />
        </div>
      </CustomTabPanel>
    </Box>
  );
}
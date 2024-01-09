import React, { Fragment, ReactNode, SyntheticEvent, useState } from "react";
import HeaderMobX from "./Header";
import FooterMobX from "./Footer";
import { userStore } from "../store/user.store";
import { Box, Tab, Tabs } from "@mui/material";
import CounterMobX from "./Counter";
import UserProfile from "./UserProfile";
import SpreadSheets from "./NaiveSpreadSheets";
import SpreadSheetsMobX from "./SpreadSheetsMobX";

const MobxComponent = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Fragment>
      <HeaderMobX />

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="User Profile"></Tab>
            <Tab label="Counter"></Tab>
            <Tab label="Unknown"></Tab>
            <Tab label="SpreadSheets"></Tab>
            <Tab label="SpreadSheetsMobX"></Tab>
          </Tabs>
        </Box>
        <Box>
          <CustomTabPanel value={value} index={0}>
            <UserProfile />
            <button
              className="btn btn-primary"
              onClick={() => userStore.updateUserName("Fsoft Academy")}
            >
              Update username
            </button>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <button
              className="btn btn-primary"
              onClick={() => userStore.updateUserName("Fsoft Academy")}
            >
              Update username 1
            </button>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <CounterMobX />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <SpreadSheets />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <SpreadSheetsMobX />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <button
              className="btn btn-primary"
              onClick={() => userStore.updateUserName("Fsoft Academy")}
            >
              Update username 2
            </button>
          </CustomTabPanel>
        </Box>
      </Box>

      <FooterMobX />
    </Fragment>
  );
};

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index } = props;
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default MobxComponent;

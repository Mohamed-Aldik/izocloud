import Head from "next/head";
import * as React from "react";
import { Box, Container, Tab } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";
import { ListProductsListToolbar } from "@/components/list-products/list-products-list-toolbar";
import { ListProductsListResults } from "@/components/list-products";
import { TabContext } from "@mui/lab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const Page = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Head>
        <title>All Products | IzoCloud</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <ListProductsListToolbar />
          <Box sx={{ mt: 3 }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="All Products" value="1" />
                  <Tab label="Stock Report" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <ListProductsListResults customers={customers} />
              </TabPanel>
              <TabPanel value="2">
                <ListProductsListResults customers={customers} />
              </TabPanel>
            </TabContext>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;

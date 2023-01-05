import Head from "next/head";
import { Box, Container } from "@mui/material";
import { PurchaseReportListResults } from "../components/purchase-report";
import { PurchaseReportListToolbar } from "../components/purchase-report/purchase-report-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";

const Page = () => (
  <>
    <Head>
      <title>Purchase Report | IzoCloud</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <PurchaseReportListToolbar />
        <Box sx={{ mt: 3 }}>
          <PurchaseReportListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;

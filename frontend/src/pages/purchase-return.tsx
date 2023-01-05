import Head from "next/head";
import { Box, Container } from "@mui/material";
import { PurchaseReturnListResults } from "../components/purchase-return";
import { PurchaseReturnListToolbar } from "../components/purchase-return/purchase-return-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";

const Page = () => (
  <>
    <Head>
      <title>Purchase Return | IzoCloud</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <PurchaseReturnListToolbar />
        <Box sx={{ mt: 3 }}>
          <PurchaseReturnListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;

import Head from "next/head";
import { Box, Container } from "@mui/material";
import { PurchasesListResults } from "../components/purchases";
import { PurchasesListToolbar } from "../components/purchases/purchases-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";

const Page = () => (
  <>
    <Head>
      <title>Purchases | IzoCloud</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <PurchasesListToolbar />
        <Box sx={{ mt: 3 }}>
          <PurchasesListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;

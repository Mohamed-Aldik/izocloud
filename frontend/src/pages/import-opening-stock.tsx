import Head from "next/head";
import { Box, Container } from "@mui/material";
import { ImportOpeningStockListResults } from "../components/import-opening-stock";
import { ImportOpeningStockListToolbar } from "../components/import-opening-stock/import-opening-stock-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";

const Page = () => (
  <>
    <Head>
      <title>Import Opening Stock | IzoCloud</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <ImportOpeningStockListToolbar />
        <Box sx={{ mt: 3 }}>
          <ImportOpeningStockListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;

import Head from "next/head";
import { Box, Container } from "@mui/material";
import { SellingPriceGroupListResults } from "../components/selling-price-group";
import { SellingPriceGroupListToolbar } from "../components/selling-price-group/selling-price-group-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";

const Page = () => (
  <>
    <Head>
      <title>Selling Price Group | IzoCloud</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <SellingPriceGroupListToolbar />
        <Box sx={{ mt: 3 }}>
          <SellingPriceGroupListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;

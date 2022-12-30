import Head from "next/head";
import { Box, Container } from "@mui/material";
import { BrandsListResults } from "../components/brands";
import { BrandsListToolbar } from "../components/brands/brands-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";

const Page = () => (
  <>
    <Head>
      <title>Brands | IzoCloud</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <BrandsListToolbar />
        <Box sx={{ mt: 3 }}>
          <BrandsListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;

import Head from "next/head";
import { Box, Container } from "@mui/material";
import { DashboardLayout } from "@/components/dashboard-layout";
import EditProduct from "@/components/list-products/edit-product";

const Page = () => (
  <>
    <Head>
      <title>Edit Product | IzoCloud</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ mt: 3 }}>
          <EditProduct />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;

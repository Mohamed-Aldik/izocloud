import Head from "next/head";
import { Box, Container } from "@mui/material";
import { DashboardLayout } from "@/components/dashboard-layout";
import EditBrand from "@/components/brands/edit-brand";

const Page = () => (
  <>
    <Head>
      <title>Edit Brand | IzoCloud</title>
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
          <EditBrand />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;

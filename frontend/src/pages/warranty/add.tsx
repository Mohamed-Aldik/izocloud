import Head from "next/head";
import { Box, Container } from "@mui/material";
import { DashboardLayout } from "@/components/dashboard-layout";
import AddWarranty from "@/components/warranties/add-warranty";

const Page = () => (
  <>
    <Head>
      <title>Add Warranty | IzoCloud</title>
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
          <AddWarranty />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;

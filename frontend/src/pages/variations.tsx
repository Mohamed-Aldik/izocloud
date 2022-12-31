import Head from "next/head";
import { Box, Container } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";
import { VariationsListResults } from "@/components/variations";
import { VariationsListToolbar } from "@/components/variations/variations-list-toolbar";

const Page = () => (
  <>
    <Head>
      <title>Variations | IzoCloud</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <VariationsListToolbar />
        <Box sx={{ mt: 3 }}>
          <VariationsListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;

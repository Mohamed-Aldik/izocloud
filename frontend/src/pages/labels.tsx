import Head from "next/head";
import { Box, Container } from "@mui/material";
import { LabelsListResults } from "../components/labels";
import { LabelsListToolbar } from "../components/labels/labels-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";

const Page = () => (
  <>
    <Head>
      <title>Labels | IzoCloud</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <LabelsListToolbar />
        <Box sx={{ mt: 3 }}>
          <LabelsListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;

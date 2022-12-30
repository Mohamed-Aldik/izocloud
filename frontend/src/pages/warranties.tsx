import Head from "next/head";
import { Box, Container } from "@mui/material";
import { WarrantiesListResults } from "../components/warranties";
import { WarrantiesListToolbar } from "../components/warranties/warranties-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";

const Page = () => (
  <>
    <Head>
      <title>Warranties | IzoCloud</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <WarrantiesListToolbar />
        <Box sx={{ mt: 3 }}>
          <WarrantiesListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;

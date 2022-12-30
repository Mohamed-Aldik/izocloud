import Head from "next/head";
import { Box, Container } from "@mui/material";
import { UnitsListResults } from "../components/units";
import { UnitsListToolbar } from "../components/units/units-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";

const Page = () => (
  <>
    <Head>
      <title>Units | IzoCloud</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <UnitsListToolbar />
        <Box sx={{ mt: 3 }}>
          <UnitsListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;

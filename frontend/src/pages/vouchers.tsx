import Head from "next/head";
import { Box, Container } from "@mui/material";
import { VouchersListResults } from "../components/vouchers";
import { VouchersListToolbar } from "../components/vouchers/vouchers-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";

const Page = () => (
  <>
    <Head>
      <title>Vouchers | IzoCloud</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <VouchersListToolbar />
        <Box sx={{ mt: 3 }}>
          <VouchersListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;

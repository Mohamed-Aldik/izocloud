import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CategoriesListResults } from '../components/categories';
import { CategoriesListToolbar } from '../components/categories/categories-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';

const Page = () => (
  <>
    <Head>
      <title>
      Categories | IzoCloud
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <CategoriesListToolbar />
        <Box sx={{ mt: 3 }}>
          <CategoriesListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page: any) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;

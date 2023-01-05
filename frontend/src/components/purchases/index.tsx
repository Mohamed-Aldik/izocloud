import { ChangeEvent, Key, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  Checkbox,
  Collapse,
  IconButton,
  MenuItem,
  Popover,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import Iconify from "../iconify";
import Link from "next/link";

export const PurchasesListResults = ({ customers, ...rest }: any, props: any) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [openMenu, setOpenMenu] = useState(null);
  const [openChild, setOpenChild] = useState(-1);
  const { row } = props;

  const handleSelectAll = (event: { target: { checked: any } }) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer: { id: any }) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event: ChangeEvent<HTMLInputElement>, id: any) => {
    //@ts-ignore
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds: any[] | ((prevState: never[]) => never[]) = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }
    //@ts-ignore
    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event: { target: { value: any } }) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event: any, newPage: any) => {
    setPage(newPage);
  };
  const handleOpenMenu = (event: { currentTarget: any }) => {
    setOpenMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenu(null);
  };
  return (
    <Card sx={{ overflow: "scroll" }} {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0 &&
                      selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Receipt Reference</TableCell>
                <TableCell>Reference No</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Supplier</TableCell>
                <TableCell>Purchase Status</TableCell>
                <TableCell>Payment Status</TableCell>
                <TableCell>Recieved Status</TableCell>
                <TableCell>Warehouse Name</TableCell>
                <TableCell>Grand Total</TableCell>
                <TableCell>Payment due</TableCell>
                <TableCell>Added By</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.slice(0, limit).map((customer: any, index: any) => (
                <>
                  <TableRow
                    hover
                    key={index}
                    //@ts-ignore
                    selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        //@ts-ignore
                        checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                        onChange={(event) => handleSelectOne(event, customer.id)}
                        value="true"
                      />
                    </TableCell>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>
                      {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`}
                    </TableCell>
                    <TableCell>
                      {/* @ts-ignore */}
                      <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                        <Iconify icon={"eva:more-vertical-fill"} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={customers.length}
        onPageChange={handlePageChange}
        //@ts-ignore
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, customers.length > 25 ? customers.length : 25]}
      />
      <Popover
        open={Boolean(openMenu)}
        anchorEl={openMenu}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Link href="/unit/edit">
          <MenuItem>
            <Iconify icon={"eva:edit-fill"} sx={{ mr: 2 }} />
            Edit
          </MenuItem>
        </Link>

        <MenuItem sx={{ color: "error.main" }}>
          <Iconify icon={"eva:trash-2-outline"} sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </Card>
  );
};

PurchasesListResults.propTypes = {
  customers: PropTypes.array.isRequired,
};

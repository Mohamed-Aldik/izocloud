import Link from "next/link";
import { ChangeEvent, Key, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  Checkbox,
  IconButton,
  List,
  ListItem,
  MenuItem,
  Popover,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { Upload as UploadIcon } from "../../icons/upload";
import { Download as DownloadIcon } from "../../icons/download";
import Iconify from "../iconify";

export const ImportOpeningStockListResults = ({ customers, ...rest }: any, props: any) => {
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
      <Typography>
        <Typography variant="h6" gutterBottom>
          Instructions:
        </Typography>
        <Typography>Follow the instructions carefully before importing the file.</Typography>
        <Typography>The columns of the file should be in the following order.</Typography>
      </Typography>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050, mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Column Number </TableCell>
                <TableCell>Column Name </TableCell>
                <TableCell>Instruction</TableCell>
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
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

ImportOpeningStockListResults.propTypes = {
  customers: PropTypes.array.isRequired,
};

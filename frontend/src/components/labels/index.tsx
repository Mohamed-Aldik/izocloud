import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Popover,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import Iconify from "../iconify";
import { FocusTrap } from "@mui/base";

export const LabelsListResults = ({ customers, ...rest }: any, props: any) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpenMenu = (event: { currentTarget: any }) => {
    setOpenMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenu(null);
  };
  const [age, setAge] = useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value as string);
  };
  return (
    <Card sx={{ overflow: "scroll" }} {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Products</TableCell>
                <TableCell>No. of labels</TableCell>
                <TableCell>Packing Date</TableCell>
                <TableCell>Barcode</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.slice(0, 1).map((customer: any, index: any) => (
                <>
                  <TableRow
                    hover
                    key={index}
                    //@ts-ignore
                    selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                  >
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>
                      {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`}
                    </TableCell>
                    <TableCell>{customer.email}</TableCell>
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
      <Grid container my={3} spacing={3}>
        <Grid item md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Barcode setting</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Barcode setting"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Barcode Type*</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Barcode Type*"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6}>
          <FocusTrap open={open} disableRestoreFocus disableAutoFocus>
            <Stack alignItems="start" spacing={2}>
              <FormControlLabel
                control={<Checkbox onChange={(e) => setOpen(e.target.checked)} checked={open} />}
                label="Add as multiple of other unit "
              />
            </Stack>
          </FocusTrap>
        </Grid>
        <Grid item md={6}>
          {open && (
            <Box sx={{ my: 1, width: "100%", display: "flex", gap: "15px" }}>
              <FormControl fullWidth sx={{}}>
                <InputLabel htmlFor="grouped-select">Base Unit</InputLabel>
                <Select defaultValue="" id="grouped-select" label="Grouping">
                  <MenuItem value={1}>Days</MenuItem>
                  <MenuItem value={2}>Months</MenuItem>
                  <MenuItem value={2}>Years</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}
        </Grid>
        <Grid item md={6}>
          <FormControlLabel control={<Checkbox />} label="Product Name" />
        </Grid>
        <Grid item md={6}>
          <FormControlLabel control={<Checkbox />} label="Product Variation (recommended)" />
        </Grid>
        <Grid item md={6}>
          <FormControlLabel control={<Checkbox />} label="Business name" />
        </Grid>
        <Grid item md={6}>
          <FormControlLabel control={<Checkbox />} label="Print packing date" />
        </Grid>
      </Grid>

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
        <MenuItem sx={{ color: "error.main" }}>
          <Iconify icon={"eva:trash-2-outline"} sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </Card>
  );
};

LabelsListResults.propTypes = {
  customers: PropTypes.array.isRequired,
};

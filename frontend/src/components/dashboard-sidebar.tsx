import { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { ChartBar as ChartBarIcon } from "../icons/chart-bar";
import { Cog as CogIcon } from "../icons/cog";
import { Lock as LockIcon } from "../icons/lock";
import { Selector as SelectorIcon } from "../icons/selector";
import { ShoppingBag as ShoppingBagIcon } from "../icons/shopping-bag";
import { User as UserIcon } from "../icons/user";
import { UserAdd as UserAddIcon } from "../icons/user-add";
import { Users as UsersIcon } from "../icons/users";
import { XCircle as XCircleIcon } from "../icons/x-circle";
import { Logo } from "./logo";
import { NavItem } from "./nav-item";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  border: 0,
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  background: "#111827",
}));

const items = [
  {
    href: "/",
    icon: <ChartBarIcon fontSize="small" />,
    title: "Dashboard",
  },
  {
    href: "/login",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "Login",
  },
  {
    href: "/register",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "Register",
  },
  // {
  //   href: '/products',
  //   icon: (<ShoppingBagIcon fontSize="small" />),
  //   title: 'Products'
  // },
  {
    href: "/account",
    icon: <UserIcon fontSize="small" />,
    title: "Account",
  },
  {
    href: "/settings",
    icon: <CogIcon fontSize="small" />,
    title: "Settings",
  },
];
const products = [
  {
    href: "/categories",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "Categories",
  },
  {
    href: "/brands",
    icon: <UserIcon fontSize="small" />,
    title: "Brands",
  },
  {
    href: "/warranties",
    icon: <CogIcon fontSize="small" />,
    title: "Warranties",
  },
  {
    href: "/units",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "Units",
  },
  {
    href: "/selling-price-groups",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "Selling Price Group",
  },
  {
    href: "/import-opening-stock",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "Import Opening Stock",
  },
  {
    href: "/import-products",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "Import Products",
  },
  {
    href: "/variations",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "Variations",
  },
  {
    href: "/list-products",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "List Products",
  },
  {
    href: "/labels",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "Labels",
  },
];

const purchases = [
  {
    href: "/purchases",
    icon: <ChartBarIcon fontSize="small" />,
    title: "Purchases",
  },
  {
    href: "/purchase-return",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "Purchase Return",
  },
  {
    href: "/purchase-report",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "Purchase Report",
  },
];
const vouchers = [
  {
    href: "/vouchers",
    icon: <ChartBarIcon fontSize="small" />,
    title: "Vouchers",
  },
];
export const DashboardSidebar = (props: { open: any; onClose: any }) => {
  const { open, onClose } = props;
  const router = useRouter();
  //@ts-ignore

  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel: string) => (event: any, newExpanded: any) => {
    //@ts-ignore
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink href="/" passHref>
              <a>
                <Logo
                  sx={{
                    height: 42,
                    width: 42,
                  }}
                />
              </a>
            </NextLink>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
          ))}

          <Accordion
            sx={{ border: 0 }}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>Products</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ flexGrow: 1 }}>
                {products.map((item) => (
                  <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ border: 0 }}
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography>Purchases</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ flexGrow: 1 }}>
                {purchases.map((item) => (
                  <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ border: 0 }}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography>Vouchers</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ flexGrow: 1 }}>
                {vouchers.map((item) => (
                  <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </>
  );
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

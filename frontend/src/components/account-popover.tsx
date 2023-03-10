import { useContext } from "react";
import Router from "next/router";
import PropTypes from "prop-types";
import { useAuth } from "@/hooks/auth";
import { Box, MenuItem, MenuList, Popover, Typography } from "@mui/material";
import { AuthContext } from "../contexts/auth-context";
import { auth, ENABLE_AUTH } from "../lib/auth";

export const AccountPopover = (props: {
  [x: string]: any;
  anchorEl: any;
  onClose: any;
  open: any;
}) => {
  const { anchorEl, onClose, open, ...other } = props;
  const authContext = useContext(AuthContext);
  const { logout } = useAuth();
  //@ts-ignore
  const { user } = useAuth({ middleware: "guest" });
  const handleSignOut = async () => {
    // logout();
    Router.push("/login").catch(console.error);
    onClose?.();

    // Check if authentication with Zalter is enabled
    // If not enabled, then redirect is not required
    if (!ENABLE_AUTH) {
      return;
    }

    // Check if auth has been skipped
    // From sign-in page we may have set "skip-auth" to "true"
    // If this has been skipped, then redirect to "sign-in" directly
    const authSkipped = globalThis.sessionStorage.getItem("skip-auth") === "true";

    if (authSkipped) {
      // Cleanup the skip auth state
      globalThis.sessionStorage.removeItem("skip-auth");

      // Redirect to sign-in page
      Router.push("/sign-in").catch(console.error);
      return;
    }

    try {
      // This can be call inside AuthProvider component, but we do it here for simplicity
      //@ts-ignore
      await auth.signOut();

      // Update Auth Context state
      //@ts-ignore
      authContext.signOut();

      // Redirect to sign-in page
      Router.push("/sign-in").catch(console.error);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: { width: "300px" },
      }}
      {...other}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">User Account{/* {user?.name} */}</Typography>
        <Typography color="text.secondary" variant="body2">
          email@text.com
          {/* {user?.email} */}
        </Typography>
      </Box>
      <MenuList
        disablePadding
        sx={{
          "& > *": {
            "&:first-of-type": {
              borderTopColor: "divider",
              borderTopStyle: "solid",
              borderTopWidth: "1px",
            },
            padding: "12px 16px",
          },
        }}
      >
        <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
      </MenuList>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};

import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import type { Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

import {
  Dashboard as DashboardIcon,
  Build as ServicesIcon,
  Event as AgendaIcon,
  People as ClientsIcon,
  LocalShipping as SuppliersIcon,
  Payment as PaymentsIcon,
  AccountCircle as AccountCircleIcon,
  ExitToApp as LogoutIcon,
} from "@mui/icons-material";
import { useState } from "react";

const drawerWidth = 260;

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#2a2a2a",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b3b3b3",
    },
    error: {
      main: "#bf1922",
    },
  },
});

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 2),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const menuItems = [
  { text: "Dia a dia", type: "subheader" },
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    active: true,
    path: "/",
  },
  { text: "Serviços", icon: <ServicesIcon />, active: false, path: "/servicos" },
  { text: "Agenda", icon: <AgendaIcon />, active: false, path: "/agenda" },
  { text: "Clientes", icon: <ClientsIcon />, active: false, path: "/clientes" },
  {
    text: "Fornecedores",
    icon: <SuppliersIcon />,
    active: false,
    path: "/fornecedores",
  },
  { type: "divider" },
  { text: "Financeiro", type: "subheader" },
  {
    text: "Pagamentos",
    icon: <PaymentsIcon />,
    active: false,
    path: "/pagamentos",
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {open && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <img src="/logo.svg" alt="Logo MecanoTech" />
            </Box>
          )}
          <IconButton onClick={toggleDrawer}>
            {open ? (
              <ChevronLeftIcon />
            ) : (
              <img src="/logo-icon.svg" alt="Ícone da logo mecanoTech" />
            )}
          </IconButton>
        </DrawerHeader>

        <List sx={{ flexGrow: 1 }}>
          {menuItems.map((item, index) => {
            if (item.type === "subheader") {
              return (
                <ListSubheader
                  key={item.text}
                  sx={{
                    backgroundColor: "transparent",
                    textAlign: open ? "left" : "center",
                    opacity: open ? 1 : 0.6,
                    fontSize: "0.75rem",
                    lineHeight: "2.5rem",
                    textTransform: "uppercase",
                  }}
                >
                  {open ? item.text : "•"}
                </ListSubheader>
              );
            }

            if (item.type === "divider") {
              return <Divider key={index} sx={{ my: 1 }} />;
            }

            return (
              <ListItem
                key={item.text}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  onClick={() => item.path && navigate(item.path)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    color: item.active ? "error.main" : "text.primary",
                    fontWeight: item.active ? "bold" : "normal",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: "inherit",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Box>
          <Divider />
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Paulinho Auto elétrica e mecânica"
                  primaryTypographyProps={{
                    style: { whiteSpace: "normal", fontSize: "0.8rem" },
                  }}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  color: "error.main",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "inherit",
                  }}
                >
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </ThemeProvider>
  );
}

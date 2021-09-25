import { makeStyles } from "@material-ui/core";
import React from "react";
import { Drawer, Typography } from "@material-ui/core";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  AppBar,
} from "@material-ui/core";
import { AddCircleOutlined, SubjectOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router";
import format from "date-fns/format";
import Avatar from "@material-ui/core/Avatar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100vw",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#f4f4f4 ",
    },
    title: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: "1",
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
    list: {
      width: `calc(100%-${drawerWidth}px)`,
    },
  };
});

function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutlined color="secondary" />,
      path: "/create",
    },
  ];
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        {/* App Bar */}
        <AppBar className={classes.appbar} elevation="1">
          <Toolbar>
            <Typography className={classes.date}>
              Today is the {format(new Date(), "do MMMM Y")}
            </Typography>
            <Typography>Mario</Typography>
            <Avatar className={classes.avatar} src="./4.jpeg" />
          </Toolbar>
        </AppBar>
        <div>
          <Typography variant="h5" className={classes.title}>
            Simple notes
          </Typography>
          {/* List/links */}
          <List className={classes.list}>
            {menuItems.map((item) => (
              <ListItem
                button
                onClick={() => history.push(item.path)}
                className={
                  location.pathname === item.path ? classes.active : null
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}

export default Layout;

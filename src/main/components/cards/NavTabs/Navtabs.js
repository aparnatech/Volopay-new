import * as React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  Tabs,
  Tab,
  Typography,
  Box,
  AppBar,
  makeStyles,
} from "@material-ui/core";
import YourCard from "../YourCard";
import AllCards from "../AllCards";
import BlockedCards from "../BlockedCards";
import { useDispatch } from "react-redux";
import { cardDataList } from "../../../../action/cardData";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    margin: "4rem 0",
  },
  tabBar: {
    margin: "2rem",
  },
  inputRoot: {
    boxShadow: "none !important",
    backgroundColor: "#fff",
    color: "#4c4c4c",
  },
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function NavTabs() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    dispatch(cardDataList());
  }, [dispatch]);

  const { cardData } = useSelector((state) => state.cardData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar
        position="fixed"
        className={classes.toolBar}
        classes={{
          root: classes.inputRoot,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="your" {...a11yProps(0)} />
          <Tab label="All" {...a11yProps(1)} />
          <Tab label="Blocked" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.tabBar}>
        <YourCard />
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabBar}>
        <AllCards data={cardData} />
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabBar}>
        <BlockedCards />
      </TabPanel>
    </Box>
  );
}

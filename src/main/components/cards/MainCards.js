import * as React from "react";
import { Box } from "@material-ui/core";
import NavTabs from "./NavTabs/Navtabs";

export default function MainCards() {
  return (
    <Box sx={{ width: "100%", padding: "3rem 0" }}>
      <NavTabs />
    </Box>
  );
}

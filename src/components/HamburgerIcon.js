import * as React from "react";
import { useEffect,useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import categories from "../data/Category";
export default function SwipeableTemporaryDrawer({ setCategory,category}) {
  const [compare,setCompare]=useState("");
  const [state, setState] = React.useState({
    left: false,
  });

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
        },
      }),
    []
  );

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  useEffect(() => {
   if(category==="general" || category === "General")
   setCompare("General");
   else if(category==="entertainment" || category === "Entertainment")
   setCompare("Entertainment");
   else if(category==="health" || category === "Health")
   setCompare("Health");
   else if(category==="business" || category === "Business")
   setCompare("Business");
   else if(category==="science" || category === "Science")
   setCompare("Science");
   else if(category==="sports" || category === "Sports")
   setCompare("Sports");
   else if(category==="technology" || category === "Technology")
   setCompare("Technology");
  }, [category])
  
console.log(category,"my category in hamburger");
  const list = (anchor) => (
    <Box
      className="box box1"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>Categories</ListItem>
      </List>
      <Divider />
      <List>
        {categories.map((text, index) => (
          <ListItem
            style={{ height: 40, borderRadius: 3 }}
            button
            key={text}
            onClick={() => setCategory(text)}
          >
          {
            (text===compare) ? <ListItemText primary={text} sx={{color:"yellow"}}/> : <ListItemText primary={text}/>
          }
            
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Button onClick={toggleDrawer("left", true)}>
        <MenuIcon />
      </Button>
      <ThemeProvider theme={theme}>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </ThemeProvider>
    </>
  );
}

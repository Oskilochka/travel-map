import React from "react";
import { makeStyles } from "@mui/styles";

type Props = {
  headerComponent?: React.ReactNode,
  mapComponent?: React.ReactNode,
  sideMenuComponent?: React.ReactNode,
};

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    maxHeight: "100vh"
  },
  container: {
    display: "flex"
  },
  item: {
    border: "1px solid blue"
  },
  itemFlexGrow: {
    flexGrow: 1,
    border: "1px solid red"
  }
}));

export function MainLayout(
  {
    headerComponent,
    mapComponent,
    sideMenuComponent
  }: Props) {
  const classes = useStyles();
  return (
    <div className={ classes.root }>
      { headerComponent }
      <div className={ classes.container }>
        <div className={ classes.item }>
          { sideMenuComponent }
        </div>
        <div className={ classes.itemFlexGrow }>
          { mapComponent }
        </div>
        {/*<div className={ classes.item }> item 3</div>*/ }
      </div>
    </div>
  );
}

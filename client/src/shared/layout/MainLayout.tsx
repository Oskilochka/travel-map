import React from "react";
import { useStyles } from "./styles";

type MainLayoutProps = {
  headerComponent?: React.ReactNode,
  mapComponent?: React.ReactNode,
  sideMenuComponent?: React.ReactNode,
};

export function MainLayout(
  {
    headerComponent,
    mapComponent,
    sideMenuComponent
  }: MainLayoutProps) {
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
      </div>
    </div>
  );
}

import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";
import React from "react";
import { BookIcon, ListIcon, StarIcon } from "../components/icons";

export const HomeBottomNavigation = (props): React.ReactElement => {
  const onSelect = (index: number): void => {
    props.navigation.navigate(props.state.routeNames[index]);
  };

  return (
    <BottomNavigation appearance="default" selectedIndex={props.state.index} onSelect={onSelect}>
      <BottomNavigationTab title="خانه" icon={BookIcon} />
      <BottomNavigationTab title="کتابخانه" icon={BookIcon} />
      <BottomNavigationTab title="نقل‌قول" icon={ListIcon} />
      <BottomNavigationTab title="نقل‌قول‌ها" icon={StarIcon} />
    </BottomNavigation>
  );
};

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screen/SearchScreen";

const Navigator = createStackNavigator(
  {
    Search: SearchScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Restaurant Search"
    }
  }
);

export default createAppContainer(Navigator);

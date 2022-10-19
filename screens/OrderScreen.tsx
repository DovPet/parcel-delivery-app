import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute
} from "@react-navigation/native";
import { TabNavigatorParamList } from "../navigator/TabNavigator";
import { RootStackParamList } from "../navigator/RootNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTailwind } from "tailwind-rn/dist";
import DeliveryCard from "../components/DeliveryCard";

type OrderScreenRouteProp = RouteProp<RootStackParamList, "Order">;

export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabNavigatorParamList, "Orders">,
  NativeStackNavigationProp<RootStackParamList>
>;

const OrderScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<OrdersScreenNavigationProp>();
  const {
    params: { order }
  } = useRoute<OrderScreenRouteProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: order.trackingItems.customer.name,
      headerTitleStyle: { color: "black" },
      headerTintColor: "#EB6A7C",
      headerBackTitle: "Deliveries"
    });
  }, [order]);

  return (
    <View style={tw('-mt-2')}>
      <DeliveryCard order={order} fullWidth/>
    </View>
  );
};

export default OrderScreen;

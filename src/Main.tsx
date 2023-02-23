
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import App from "./App";
import Householdprovider from "./Context/HouseholdContext";


function Main() {
  return (
    <PaperProvider>
      <Householdprovider>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <App />
        </SafeAreaProvider>
      </Householdprovider>
    </PaperProvider>
  );
}
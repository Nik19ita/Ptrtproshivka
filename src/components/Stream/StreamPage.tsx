"use client";

import { Section, TabsList } from "@telegram-apps/telegram-ui";
import { TabsItem } from "@telegram-apps/telegram-ui/dist/components/Navigation/TabsList/components/TabsItem/TabsItem";
import { useState } from "react";
import { StreamTab } from "./StreamTab";
import Profile from "../Profile/Profile";
import { Page } from "../Page";
import { Box, Tabs, Text } from "@radix-ui/themes";

const StreamTabs = () => {
  const [selectedItem, setSelectedItem] = useState<String>("0");

  const handleStreamSelect = () => {
    setSelectedItem("0");
  };

  const handleRecSelect = () => {
    setSelectedItem("1");
  };

  return (
    <Tabs.Root defaultValue="stream">
      <Tabs.List style={{width: "100%"}}>
        <Tabs.Trigger value="stream">Эфиры</Tabs.Trigger>
        <Tabs.Trigger value="records">Записи</Tabs.Trigger>
      </Tabs.List>

     
        <Tabs.Content value="stream" >
          <Text size="2" color="teal">Здесь будут записи.</Text>
               
         
        </Tabs.Content>

        <Tabs.Content value="records">
          <Text size="2" color="teal">Здесь будут записи.</Text>
        </Tabs.Content>
      
    </Tabs.Root>
  );

  // return (
  //   <TabsList>
  //     <TabsItem
  //       title={"Эфиры"}
  //       id="0"
  //       selected={"0" == selectedItem}
  //       onClick={handleStreamSelect}
  //     >

  //             <StreamTab />

         
      
  //     </TabsItem>
  //     <TabsItem
  //       title={"ЗаписиЗаголовок"}
  //       id="0"
  //       selected={"1" == selectedItem}
  //       onClick={handleRecSelect}
  //     >
  //       Записи
  //     </TabsItem>
  //     <TabsItem>
  //       {" "}
  //       Это TabsList.Item
  //       <StreamTab />
  //     </TabsItem>
  //   </TabsList>
  // );
};

export default StreamTabs;

'use client'

import { FixedLayout, Tabbar } from "@telegram-apps/telegram-ui";
import { TabbarItem } from "@telegram-apps/telegram-ui/dist/components/Layout/Tabbar/components/TabbarItem/TabbarItem";
import Link from "next/link";
import { useState } from "react";
import { ReactSVG } from "react-svg";

const TabbarBottom = () => {
    const tabs = [{
        id: 0,
        text: "Мероприятия",
        icon: "img/addhome_28.svg",
        path: "/events"
    },
{
        id: 1,
        text: "Эфиры",
        icon: "img/channel_28.svg",
        path: "/stream"
    },
{
        id: 2,
        text: "Профиль",
        icon: "img/smile_28.svg",
        path: "/"
    }]
     const [currentTab, setCurrentTab] = useState(tabs[0].id);
     return (
        <FixedLayout vertical="bottom">
            <Tabbar >
{tabs.map(({
        id,
        text,
        icon,
        path
      }) => <TabbarItem key={id} text={text} selected={id === currentTab} onClick={() => setCurrentTab(id)}>
               <Link href={path}>
               <ReactSVG src={icon}/>
               </Link>
               
          </TabbarItem>)}
     </Tabbar>
        </FixedLayout>
     )
     
        
      
}
export default TabbarBottom
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import React, { useEffect } from "react";
import { User } from "@supabase/supabase-js";
import {BsPencilSquare } from "react-icons/bs";
import { MdPreview } from "react-icons/md";
import Cards from "../components/Cards";
import { useUserStore } from "../store/UserStore";


const CreateCard = () => {
    const { setIsLoggedIn, setUserInfo } = useUserStore()
    useEffect(() => {
        document.title = "Créez votre carte et prévisualisez là - FlashCards";
        const meta = document.createElement('meta');
        meta.name = "viewport";
        meta.content = "width=device-width, initial-scale=1.0";
        document.head.append(meta);
        sessionStorage.getItem("auth-token") != null ? (setIsLoggedIn(true)) : setIsLoggedIn(false)
            const userInfo : User | null = sessionStorage.getItem("user-info") ? JSON.parse(sessionStorage.getItem("user-info") as string) : null;
            setUserInfo(userInfo)
    }, [])
        const data = [
          
          {
            label: "Creation",
            value: "creation",
            icon: BsPencilSquare,
            content: <Cards 
            cardType="flashcardCreation" 
            cardImage="https://salt.tikicdn.com/cache/w1200/ts/product/5b/ea/85/c10fe402b39cbbd97e961e66349fc8a5.jpg"
            />
          },
          {
            label: "Preview",
            value: "preview",
            icon: MdPreview,
            content: <Cards 
            cardType="flashcardPreview"
            cardImage="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            />
          },
        ];
        return (
            <Tabs 
            value="creation"
            orientation="horizontal"
            >
                <TabsHeader 
                placeholder={undefined}
                className="mx-2 bg-blue-gray-100 dark:bg-blue-gray-800"
                >
                    {data.map(({ label, value, icon }) => (
                    <Tab 
                    key={value} 
                    value={value} 
                    placeholder={undefined}
                    className="bg-blue-gray-100 dark:bg-blue-gray-800 dark:text-blue-500 text-2xl"
                    >
                        <div 
                        className="flex items-center gap-4 h-10 font-bold "
                        >
                            {React.createElement(icon, { className: "w-5 h-5" })}
                            {label}
                        </div>
                    </Tab>
                    ))}
                </TabsHeader>

                <TabsBody 
                placeholder={undefined}
                animate={{
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 },
                  }}
                className=""
                >
                    {data.map(({ value, content }) => (
                    <TabPanel 
                    key={value} 
                    value={value}
                    className="text-black dark:text-white"
                    >
                        {content}
                    </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
    );
    }

export default CreateCard
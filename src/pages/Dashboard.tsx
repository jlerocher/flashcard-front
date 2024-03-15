import { useEffect } from "react"
import { useUserStore } from "../store/UserStore"
import { User } from "@supabase/supabase-js"

function Dashboard() {
    const { setIsLoggedIn, userInfo, setUserInfo } = useUserStore()
    useEffect(
        () => {
            document.title = "Mon compte - FlashCards"
            sessionStorage.getItem("auth-token") != null ? (setIsLoggedIn(true)) : setIsLoggedIn(false)
            const userInfo : User | null = sessionStorage.getItem("user-info") ? JSON.parse(sessionStorage.getItem("user-info") as string) : null;
            setUserInfo(userInfo)
        }, []
    )
  return (
    <div>
        <h2>
            Dashboard
        </h2>
        <p>
            {JSON.stringify(userInfo)}
        </p>
    </div>
  )
}

export default Dashboard

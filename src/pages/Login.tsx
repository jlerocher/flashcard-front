/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import { Checkbox, Input, Typography } from '@material-tailwind/react'
import { useThemeStore, ThemeProps } from '../store/ThemeStore'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'
import ButtonVariants from '../components/ButtonVariants'
import { Link, useNavigate } from 'react-router-dom'
import { emailRegex, signIn } from '../services/auth'
import { useUserStore } from '../store/UserStore'
import { User } from '@supabase/supabase-js'



const Login = () => {
    const { isLoggedIn, setIsLoggedIn, setUserInfo } = useUserStore();
    const theme = useThemeStore((state: unknown) => (state as ThemeProps).theme);
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [rememberMe, setRememberMe] = useState(true);
    const navigate = useNavigate()
    useEffect(() => {
        document.title = "Page de connexion - FlashCards"
        sessionStorage.getItem("auth-token") != null ? (setIsLoggedIn(true)) : setIsLoggedIn(false)
        const userInfo : User | null = sessionStorage.getItem("user-info") ? JSON.parse(sessionStorage.getItem("user-info") as string) : null;
        setUserInfo(userInfo)
        
    }, [])

    const validateLoginForm = () => {
        if (emailRegex.test(emailValue) && passwordValue.length > 8) {
            return true;
        } else {
            return false;
        }
    }
    if (isLoggedIn === true) {
        navigate("/")
    } else {
        return (
    
            <div>
                <Cards 
                cardType="formCard" 
                cardTitleText="Connectez vous" 
                cardContent={
                    <form className="space-y-5">
                        <hr />
                        <div>
                            <label 
                            htmlFor="email"
                            className="font-bold text-xl"
                            >Entrez votre adresse email</label>
                            <Input 
                                placeholder="Votre email"
                                variant="outlined"
                                label="Adresse email"
                                size="lg"
                                type="email"
                                onChange={
                                    (e) => {
                                        setEmailValue(e.target.value);
                                    } 
                                
                                }
                                color={theme === "light" ? "black" : "white"}
                                autoFocus={true}
                                className="text-black text-xl bg-blue-50 dark:bg-blue-gray-800 px-2 rounded-t font-bold" crossOrigin={undefined}                   
                                />
                               { !emailRegex.test(emailValue) && <div className="text-red-500">Adresse email invalide</div> }
                        </div>
                        
        
                        <div>
                            <label 
                            htmlFor="password"
                            className="font-bold text-xl"
                            >Entrez votre mot de passe</label>
                            <Input 
                                placeholder=""
                                variant="outlined"
                                label="Mot de passe"
                                size="lg"
                                type="password"
                                onChange={(e) => {
                                    setPasswordValue(e.target.value);
                                }}
                                color={theme === "light" ? "black" : "white"}
                                className="text-black text-xl bg-blue-50 dark:bg-blue-gray-800 px-2 rounded-t font-bold" crossOrigin={undefined}                    
                                />
                        </div>
                        <hr />
                        <div className="">
                            <Checkbox 
                                placeholder=""
                                icon={<BsFillHandThumbsUpFill />}
                                color="blue"
                                label={<div>
                                    <Typography
                                        placeholder=""
                                        color="blue-gray"
                                        className="font-medium dark:text-gray-50">
                                        Se souvenir de moi
                                    </Typography>
                                </div>}
                                className="h-8 w-8" crossOrigin={undefined}
                                onChange={() => {
                                    rememberMe ? setRememberMe(false) : setRememberMe(true);
                                     console.log(rememberMe);
                                }}
                            />
        
                            <Typography 
                            placeholder=""
                            >
                                <Link to="/forgot-password">
                                    <span className="text-blue-700 font-bold ml-2 dark:text-blue-400">
                                        &nbsp;Mot de passe oublié ?
                                    </span>
                                </Link>
                                
                            </Typography>
        
                            <Typography 
                            placeholder=""
                            >
                                <Link to="/register">
                                    <span className="text-blue-700 font-bold ml-2 dark:text-blue-400">
                                        &nbsp;Pas encore de compte ?
                                    </span>
                                </Link>
        
                            </Typography>
                            
                        </div>
        
                        <hr />
        
                        <ButtonVariants
                        btnType="primary"
                        size="lg"
                        type="button"
                        onClick={async () => {
                            const data = await signIn(emailValue, passwordValue);
                            if (data.user) {
                                 setIsLoggedIn(true)
                                 setUserInfo(data.user)
                                 sessionStorage.setItem("auth-token", data.session.access_token)
                                 data.user.email && sessionStorage.setItem("user-info", JSON.stringify(data.user))
                                 data.session && sessionStorage.setItem("user-session", JSON.stringify(data.session))
                                 
                                 navigate("/")
                            } else {
                                setIsLoggedIn(false)
                                console.log("Authenthication failed ! Check your credentials");
                                
                            }          
                            
                        }
                        }
                        loading={validateLoginForm() ? false : true}
                        >
                            {validateLoginForm() ? "Se connecter" : "Veuillez remplir correctement tous les champs"}
                        </ButtonVariants>
                    </form>
                }
                />
            </div>
          )
    }
    
    }

export default Login
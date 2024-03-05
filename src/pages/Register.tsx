import  { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import { Checkbox, Input, Typography } from '@material-tailwind/react'
import { useThemeStore, ThemeProps } from '../store/ThemeStore'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'
import ButtonVariants from '../components/ButtonVariants'
import { Link } from 'react-router-dom'
import { emailRegex, passwordRegex, signUp } from '../services/auth'





const Register = () => {
    useEffect(() => {
        document.title = "Page d'inscription - FlashCards"
    }, [])

    const [nameValue, setNameValue] = useState("");
    const [lastnameValue, setLastNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [hasAgreedTerms, setHasAgreedTerms] = useState(false);
    const [HasSuscribed, setHasSuscribed] = useState(false);
    const [signUpError, setSignUpError] = useState("");

    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);

    const validateAllDataForm = () => {
        if (validEmail && validPassword && hasAgreedTerms) {
            return true;
        } else {
            return false;
        }
    }
    
    const theme = useThemeStore((state: unknown) => (state as ThemeProps).theme);
    console.log(signUpError);
    
    return (
    
    <div>
        <Cards 
        cardType="formCard" 
        cardTitleText="Créez votre compte" 
        cardContent={
            <form className="space-y-5 " onSubmit={() => signUp(
                nameValue, 
                lastnameValue, 
                emailValue, 
                passwordValue,
                hasAgreedTerms,
                HasSuscribed, 
                setSignUpError)}>
                <hr />
                <div>
                    <label 
                    htmlFor="name"
                    className="font-bold text-xl"
                    >Entrez votre nom</label>
                    <Input 
                        placeholder="Votre nom"
                        required
                        variant="outlined"
                        label="Nom de famille"
                        onChange={(event) => {
                            setNameValue(event.target.value)
                        } }
                        id="name"
                        size="lg"
                        type="text"
                        color={theme === "light" ? "black" : "white"}
                        autoFocus={true}
                        className="text-black text-xl bg-blue-50 dark:bg-blue-gray-800 px-2 rounded-t font-bold" crossOrigin={undefined}                    
                        />
                        
                </div>

                <div>
                    <label 
                    htmlFor="lastname"
                    className="font-bold text-xl"
                    >Entrez votre prénom</label>
                    <Input 
                        placeholder="Votre prénom"
                        variant="outlined"
                        label="Prénom"
                        id="lastname"
                        required
                        onChange={(event) => {
                            setLastNameValue(event.target.value)
                            
                        }}
                        size="lg"
                        type="text"
                        color={theme === "light" ? "black" : "white"}
                        className="text-black text-xl bg-blue-50 dark:bg-blue-gray-800 px-2 rounded-t font-bold" crossOrigin={undefined}                    
                        />
                        

                </div>

                <div>
                    <label 
                    htmlFor="email"
                    className="font-bold text-xl"
                    >Entrez votre adresse email</label>
                    <Input 
                        placeholder="Votre email"
                        variant="outlined"
                        label="Adresse email"
                        id="email"
                        required
                        onChange={(event) => {
                            
                            emailRegex.test(event.target.value) ? setValidEmail(true) : setValidEmail(false);
                            setEmailValue(event.target.value)
                        } }

                        size="lg"
                        type="email"
                        color={theme === "light" ? "black" : "white"}
                        className="text-black text-xl bg-blue-50 dark:bg-blue-gray-800 px-2 rounded-t font-bold" crossOrigin={undefined}                    
                        />
                        {validEmail ? (
                            <div className="text-green-500">Adresse email valide</div>
                        ) : (
                            <div className="text-red-500">Adresse email invalide</div>
                        )}
                </div>
                
                <div>
                    <label 
                    htmlFor="password1"
                    className="font-bold text-xl"
                    >Entrez votre mot de passe</label>
                    <Input 
                        placeholder=""
                        variant="outlined"
                        id="password1"
                        label="Mot de passe"
                        onChange={(event) => {
                            setPasswordValue(event.target.value)
                            
                            passwordRegex.test(event.target.value) ? setValidPassword(true) : setValidPassword(false);
                        } }
                        size="lg"
                        type="password"
                        pattern=""
                        color={theme === "light" ? "black" : "white"}
                        className="text-black text-xl bg-blue-50 dark:bg-blue-gray-800 px-2 rounded-t font-bold" crossOrigin={undefined}                    
                        />
                        {validPassword ? (
                            <div className="text-green-500">Mot de passe valide</div>
                        ) : (
                            <div className="text-red-500">Mot de passe invalide</div>
                        )}
                </div>

                <div>
                </div>

                <hr />
                
                <div className="">
                    <Checkbox 
                        placeholder=""
                        icon={<BsFillHandThumbsUpFill />}
                        onChange={(event) => {
                            setHasAgreedTerms(event.target.checked)
                        } }
                        color="blue"
                        label={<div>
                            <Typography
                                placeholder=""
                                color="blue-gray"
                                className="font-medium dark:text-gray-50">
                                J'accepte les <Link to="/terms" className='text-blue-700 font-bold ml-2 dark:text-blue-400'>Conditions d'utilisation</Link> du site
                            </Typography>
                        </div>}
                        className="h-8 w-8" crossOrigin={undefined}                    />

                    <Checkbox 
                        placeholder=""
                        icon={<BsFillHandThumbsUpFill />}
                        color="blue"
                        onChange={(event) => {
                            setHasSuscribed(event.target.checked)
                        } }
                        label={<div>
                            <Typography
                                placeholder=""
                                color="blue-gray"
                                className="font-medium dark:text-gray-50">
                                Je souhaite m'abonner à la newsletter
                            </Typography>
                        </div>}
                        className="h-8 w-8" crossOrigin={undefined}                    />

                    <Typography 
                    placeholder=""
                    >
                        <Link to="/login">
                            <span className="text-blue-700 font-bold ml-2 dark:text-blue-400">
                                &nbsp;Déjà inscrit ? Connectez en cliquant ici
                            </span>
                        </Link>

                    </Typography>
                </div>

                <hr />

                <ButtonVariants
                btnType="primary"
                size="lg"
                type="submit"
                loading={validateAllDataForm() ? false : true}
                >
                   {validateAllDataForm() ? "S'inscrire" : "Veuillez remplir correctement tous les champs"}
                </ButtonVariants>
            </form>
        }
        />
    </div>
  )
}

export default Register
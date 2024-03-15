import { useEffect } from "react";
import { ReactTyped } from "react-typed";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import ButtonVariants from "../components/ButtonVariants";
import Cards from "../components/Cards";
import CarouselCustomNavigation from "../components/CarouselCustomNavigation";
import { Link } from "react-router-dom";
import { useUserStore } from '../store/UserStore';
import { User } from "@supabase/supabase-js";

const Home = () => {
    const { isLoggedIn, setIsLoggedIn, setUserInfo } = useUserStore();

    useEffect(() => {
        document.title = "Page d'acceuil - FlashCards";
        sessionStorage.getItem("auth-token") != null ? (setIsLoggedIn(true)) : setIsLoggedIn(false)
        const userInfo : User | null = sessionStorage.getItem("user-info") ? JSON.parse(sessionStorage.getItem("user-info") as string) : null;
        setUserInfo(userInfo)
        
    }, []);
    
    return (

        <>
            
            <Cards 
            cardType="ctaCard"
            cardHeader={
                <div className="mt-0">
                    <CarouselCustomNavigation />
                    <p>
                    Besoin d'aide pour 
                    <br />
                    <ReactTyped 
                    strings={["reviser", "mémoriser"]} 
                    loop={true} 
                    typeSpeed={100}/> ?
                    </p>
                </div>
                
            }
            cardContent={
                <div className="space-y-4">
                    <p>
                        Transformez votre manière d'apprendre avec notre application de 
                        création de flashcards.
                    </p>
                    <ul className="list-disc mx-8">
                        <li>Organisez vos connaissances</li>
                        <li>Mémorisez plus efficacement</li>
                        <li>Réussissez vos études ou votre formation professionnelle</li>
                    </ul>
                    <p className="">
                        Commencez gratuitement à créer vos propres cartes et dominez chaque matière !
                    </p>
                </div>
            }
            cardFooter={
                <ButtonVariants
                    btnType="primary"
                    size="lg"
                >
                     <Link to={isLoggedIn ? "/create-card" : "/login"}>Commencer</Link> 
                     <BsFillArrowRightCircleFill className="text-2xl"/>   
                 </ButtonVariants>
            }
            />

            <Cards cardType="testimonial" />
            
        </>
        
    );
};

export default Home;

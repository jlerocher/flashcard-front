import { useEffect } from "react";
import { ReactTyped } from "react-typed";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import ButtonVariants from "../components/ButtonVariants";
import Cards from "../components/Cards";
import CarouselCustomNavigation from "../components/CarouselCustomNavigation";
import { Link } from "react-router-dom";


const Home = () => {

    useEffect(() => {
        document.title = "Page d'acceuil - FlashCards";
    }, []);

    return (

        <>
            
            <Cards 
            cardType="ctaCard"
            cardHeader={
                <div className="mt-0">
                    <CarouselCustomNavigation />
                    <p>
                    Besoin d'aide pour <ReactTyped 
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
                     <Link to="/create-card">Commencer</Link> 
                     <BsFillArrowRightCircleFill className="text-2xl"/>   
                 </ButtonVariants>
            }
            />

            <Cards cardType="testimonial" />
            
        </>
        
    );
};

export default Home;

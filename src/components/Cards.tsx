import { Card, CardBody, CardFooter, CardHeader, Typography, Avatar, Input, Textarea } from "@material-tailwind/react";
import { ReactNode, useState } from "react";
import { ThemeProps, useThemeStore } from "../store/ThemeStore";
import ButtonVariants from "./ButtonVariants";
import { ReactTyped } from "react-typed";
import DragDrop from "./DragDrop";
import { FaQuestionCircle } from "react-icons/fa";
import { FlashCardState, useFlashCardStore } from "../store/FlashCardStore";

interface CardsProps {
 cardType: string;
 cardHeader?: string | ReactNode;
 cardContent?:  string | ReactNode;
 cardFooter?: string | ReactNode;
 cardTitleText?: string;
 cardImage?: string;
 
}
   
const Cards: React.FC<CardsProps> = ({ cardType, cardHeader, cardContent, cardFooter, cardTitleText }) => {
    const theme = useThemeStore((state: unknown) => (state as ThemeProps).theme);
    const {answer, question, image, categories, setAnswer, setQuestion, setCategories} = useFlashCardStore((state: unknown) => (state as FlashCardState))
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);
    const [questionValue, setQuestionValue] = useState("");
    const [answerValue, setAnswerValue] = useState("");
    const [categoriesValues, setCategoriesValues] = useState([""]) 

    const verifyInputs = () => {
        if (questionValue.length > 0 && answerValue.length > 0 ) {
            return true
        } else {
            return false
        }
    }


    function StarIcon() {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-yellow-700"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        );
      }
      
    if (cardType === "ctaCard") {
        return (
            <Card 
            placeholder=""
            variant="filled"
            color="white"
            shadow={true}
            className="mx-2 my-12 p-0 max-w-[24rem] overflow-hidden dark:bg-blue-gray-800 dark:text-blue-gray-50 rounded-sm"
            >
                <CardHeader 
                placeholder=""
                variant="filled"
                shadow={false}
                floated={false}
                color="white"
                className="m-0 p-0 rounded-none dark:bg-blue-gray-800"
                >
                    <Typography 
                    variant="h2" 
                    color="blue-gray" 
                    className="mb-2 dark:text-blue-gray-50" 
                    placeholder={undefined}
                    >
                        {cardHeader}
                    </Typography>
                </CardHeader>
                <CardBody 
                placeholder=""
                >    
                    <Typography 
                    placeholder="">
                        {cardContent}
                    </Typography>
              </CardBody>
              <CardFooter className="pt-0"  placeholder="">
                  {cardFooter}
              </CardFooter>
            </Card>
          );
    } else if (cardType === "formCard") {

        return(
            <Card
            placeholder=""
            variant="filled"
            color="white"
            shadow={true}
            className="mx-2 my-14 p-0 max-w-[24rem] overflow-hidden dark:bg-blue-gray-800 dark:text-blue-gray-50 rounded-sm"
            >
                <CardHeader
                placeholder=""
                shadow={false}
                floated={false}
                color="white"
                className="m-0 p-0 rounded-none dark:bg-blue-gray-800"
                >
                    <Typography
                    placeholder=""
                    variant="h2"
                    className="dark:text-blue-gray-50"
                    >
                        {cardTitleText}
                    </Typography>
                </CardHeader>

                <CardBody
                placeholder=""
                >
                    {cardContent}
                </CardBody>
                <CardFooter
                placeholder=""
                >
                    {cardFooter}
                </CardFooter>
            </Card>
        )
    } else if (cardType === "testimonial") {
            return (
              <Card 
              color="white" 
              shadow={true} 
              className="mx-2 my-12 p-2 max-w-[24rem] overflow-hidden dark:bg-blue-gray-800 dark:text-blue-gray-50 rounded-sm" 
              placeholder="">
                <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-8 dark:text-blue-gray-50" 
                placeholder=""
                >
                  <Avatar
                    size="lg"
                    variant="circular"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    alt="tania andrew"
                    placeholder=""
                  />
                  <div className="flex w-full flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                      <Typography 
                      variant="h3" 
                      color="blue-gray" 
                      placeholder={undefined}
                      className="dark:text-blue-gray-50"
                      >
                        Tania Andrew
                      </Typography>
                      <div className="5 flex items-center gap-0">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </div>
                    </div>
                    <Typography 
                    color="blue-gray"  
                    placeholder={undefined}
                    className="dark:text-blue-gray-50"
                    >
                        Etudiant en 3e année @ Paris-Saclay
                    </Typography>
                  </div>
                </CardHeader>
                <CardBody 
                className="mb-6 p-0"
                placeholder={undefined}>
                  <Typography placeholder={undefined}>
                    &quot; J'ai trouvé une solution à mes problèmes de révisions
                    grâce à l'utilisation des cartes flashs. Après avoir crée mes 
                    flash Cards, je me suis mis à réviser partout, ce qui m'a aidé à
                    augmenter drastiquement mes resultats universitaires &quot;
                  </Typography>
                </CardBody>
              </Card>
            );
    } else if (cardType === "flashcardPreview") {
        return (
              <Card 
              className="w-full max-w-[26rem] shadow-lg " 
              placeholder={undefined}
              color={theme === "light" ? "white" : "blue-gray"}
              >
                <CardHeader 
                floated={false} 
                color="blue-gray" 
                placeholder={undefined}>
                  <img
                    src={image}
                    alt="Flash Card Image"
                  />
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                </CardHeader>

                <CardBody 
                placeholder={undefined}
                >
                  <div className="space-y-5 mb-3 flex items-center justify-between">
                    <Typography 
                    variant="h3" 
                    color="black"
                    placeholder={undefined}
                    >
                      {question}
                    </Typography>
                    
                  </div>
                  <hr 
                  className="my-5 h-1 rounded-2xl" 
                  color={theme === "light" ? "black" : "black"}
                  />

                  <Typography 
                    color={theme === "light" ? "black" : "white"} 
                    placeholder={undefined}
                    className={`text-2xl bg-blue-gray-50 dark:bg-blue-gray-800 italic text-center leading-9 ${isAnswerVisible ? "py-6" : "py-24"} rounded-md`}
                    >
                      {isAnswerVisible && <ReactTyped 
                      strings={[answer || ""]} 
                      typeSpeed={30}/>}
                    </Typography>
                  <div 
                  className="group mt-8 inline-flex flex-wrap items-center gap-3"
                  >
                    {categories?.map((item) => {
                        return (
                        <span
                        key={item} 
                        className="cursor-pointer text-center rounded-md font-bold border border-gray-100 dark:bg-blue-gray-800 dark:border-blue-gray-800 dark:text-gray-100 bg-gray-300 p-2 text-gray-900 "
                        >
                            {item}
                        </span>
                        )
                    })}
                      
                      
                  </div>
                </CardBody>
                <CardFooter 
                className="pt-3" 
                placeholder={undefined}
                >
                    <ButtonVariants 
                    btnType="primary" 
                    size="lg"
                    fullWidth={true}
                    onClick={() => {
                        isAnswerVisible ? setIsAnswerVisible(false) : setIsAnswerVisible(true)
                    }}
                    className="text-center text-2xl"
                    >
                        {isAnswerVisible ? "Cacher la reponse " : "Montrer la reponse "}
                    </ButtonVariants>
                </CardFooter>
              </Card>
            );
    } else if (cardType === "flashcardCreation") {
        return (
            <Card 
              className="w-full max-w-[26rem] shadow-lg " 
              placeholder={undefined}
              color={theme === "light" ? "white" : "blue-gray"}
              >
                <form >
                    <CardHeader 
                    floated={false} 
                    color="white" 
                    placeholder={undefined}
                    className="py-4 px-2 "
                    >
                        <label 
                        htmlFor="img-input"
                        className="text-xl py-2"
                        >
                            Choisissez une image pour votre carte | <br />
                            Format idéal: 1200 x 900 <br />
                            Extensions : jpeg ou png
                        </label>

                        <DragDrop />

                    </CardHeader>

                    <CardBody 
                    placeholder={undefined}
                    >
                    <div className="space-y-5 mb-3 flex items-center justify-between">
                        <Input 
                        crossOrigin=""
                        type="text"
                        variant="outlined"
                        label="Votre question"
                        size="lg"
                        onChange={(e) => {
                            setQuestionValue(e.target.value)
                        }}
                        onBlur={() => {
                            setQuestion(questionValue)
                        }}
                        icon={<FaQuestionCircle />}
                        className="font-bold text-xl"
                        />
                        
                    </div>
                    <hr 
                    className="my-5 h-1 rounded-2xl" 
                    color={theme === "light" ? "black" : "black"}
                    />

                    <Textarea
                    variant="outlined"
                    label="Votre reponse"
                    size="lg"
                    onChange={(e) => {
                        setAnswerValue(e.target.value)
                    }}
                    onBlur={() => {
                        setAnswer(answerValue)
                    }}
                    className="text-xl"
                    />
                    <div 
                    className="group mt-8 inline-flex flex-wrap items-center gap-3"
                    >
                        <Input 
                        crossOrigin=""
                        type="text"
                        variant="outlined"
                        label="Categorie(s)"
                        onChange={(e) => {
                            setCategoriesValues(e.target.value.split(" "))
                        }}
                        onBlur={() => {
                            setCategories(categoriesValues)
                        }}
                        className="text-xl"
                        />
                        <Typography
                        placeholder=""
                        variant="small"
                        color="gray"
                        className="mt-2 flex items-center gap-1 font-normal"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="-mt-px h-8 w-8"
                            >
                            <path
                                fillRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                clipRule="evenodd"
                            />
                            </svg>
                            Les catégories doivent etre séparées par un espace.
                    </Typography>
                        
                        
                    </div>
                    </CardBody>
                    <CardFooter 
                    className="pt-3" 
                    placeholder={undefined}
                    >
                        <ButtonVariants 
                        btnType="primary"
                        type="submit"
                        size="lg"
                        fullWidth={true}
                        onClick={(e) => {
                            e.preventDefault()
                            verifyInputs()
                            
                        }}
                        className="text-center text-2xl"
                        >
                            Créer la carte
                        </ButtonVariants>
                    </CardFooter>
                </form>
              </Card>
        )
    }
    }

  export default Cards;
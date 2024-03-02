import { Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import { ReactNode } from "react";

interface CardsProps {
 cardType: string;
 cardHeader: string | ReactNode;
 cardDescription:  string | ReactNode;
 cardFooter: string | ReactNode;
 
}
   
  const Cards: React.FC<CardsProps> = ({ cardType, cardHeader, cardDescription, cardFooter }) => {
    if (cardType === "ctaCard") {
        return (
            <Card 
            placeholder={undefined}
            variant="filled"
            color="white"
            shadow={true}
            className="mx-2 my-4 p-0 max-w-[24rem] overflow-hidden dark:bg-blue-gray-800 dark:text-blue-gray-50 rounded-sm"
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
                placeholder={undefined}

                >
                    
                <Typography 
                placeholder={undefined}>
                    {cardDescription}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0"  placeholder={undefined}>
                  {cardFooter}
              </CardFooter>
            </Card>
          );
    }
  }

  export default Cards;
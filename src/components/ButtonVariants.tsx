import { ReactNode } from 'react';
import { Button } from "@material-tailwind/react";
import type { ButtonProps } from "@material-tailwind/react";


interface ButtonVariantsProps extends ButtonProps {
    btnType: string;
    textValue?: string;
    children: ReactNode;
}

export default function ButtonVariants({ btnType, textValue, children, ...props }: ButtonVariantsProps) {
    if (btnType === "primary") {
        return (
            <Button 
                type="button"
                variant="gradient"
                size="md"
                color="blue"
                fullWidth={false}
                ripple={true}
                loading={false}
                className="text-white flex space-x-2 mx-auto items-center"
                placeholder=""
                {...props} // Utilisez l'opérateur de décomposition ici
            >
                {textValue}
                {children}
            </Button>
        )
    } else if (btnType === "headerBtn") {
        return (
            <Button 
                type="button"
                variant="gradient"
                size="sm"
                color="blue"
                fullWidth={false}
                ripple={true}
                loading={false}
                className="text-white flex justify-evenly items-center"
                placeholder=""
                {...props}
            >
                {textValue}
                {children}
            </Button>
        ) 
    }
}
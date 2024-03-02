import { Typography } from "@material-tailwind/react";
 
export function SimpleFooter() {
  return (
    <footer>
      <Typography 
      placeholder=""
      color="blue-gray" 
      className="font-normal">
         <p>&copy; 2023 | Made with</p> <pre><code>React - Typescript - Material Tailwind</code></pre> 
      </Typography>
    </footer>
  );
}
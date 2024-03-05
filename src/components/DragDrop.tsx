import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { FlashCardState, useFlashCardStore } from "../store/FlashCardStore";

const fileTypes = ["JPG", "PNG"];

function DragDrop() {
    const {setImage} = useFlashCardStore((state: unknown) => (state as FlashCardState))
    const [file, setFile] = useState<File | null>(null);
    const handleChange = (file: File) => {
        setFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
            if (typeof reader.result === 'string') {
                setImage(reader.result);
            }
        };
        reader.readAsDataURL(file);
    };
  return (
    <div
    className="my-5 mx-1"
    >
        <FileUploader 
        handleChange={handleChange}
        label={screen.width <= 768 ? "Cliquez pour selectionner un fichier" : "Glissez votre fichier ici !"} 
        name={file?.name} 
        types={fileTypes}
        maxSize={5}
        />
    </div>
  );
}

export default DragDrop;
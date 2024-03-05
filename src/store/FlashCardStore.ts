import { create } from 'zustand';

export type FlashCardState = {
    question: string;
    answer: string ;
    image: string;
    categories: string[]

    setQuestion: (question: string) => void;
    setAnswer: (answer: string) => void;
    setImage: (imageUrl: string) => void;
    setCategories: (categoriesList: string[]) => void
};

export const useFlashCardStore = create<FlashCardState>((set) => ({
    question: "",
    answer: "",
    image: "",
    categories : [],

    setQuestion(text) {set({question: text})},
    setAnswer(text) {set({answer: text})},
    setImage(imageUrl) {
        set({image: imageUrl})
    },
    setCategories(categoriesList) {
        set({categories: categoriesList})
    },
}))
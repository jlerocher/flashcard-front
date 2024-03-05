
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fbxejznnlkppxvgbeubn.supabase.co'
const supabaseKey: string = import.meta.env.VITE_ANON_PUBLIC
if (supabaseKey) {
    console.log("Supabase Key set: *************" + supabaseKey.slice(-4));
    
}

export const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Registers a new user with the provided information.
 * 
 * @param nameValue - The user's first name.
 * @param lastNameValue - The user's last name.
 * @param emailValue - The user's email address.
 * @param passwordValue - The user's password.
 * @param hasAgreedTerms - Indicates whether the user has agreed to the terms and conditions.
 * @param HasSuscribed - Indicates whether the user has subscribed to any services.
 * @param setSignUpError - A function to set the error message in case of any errors during sign up.
 * @returns The user information after successful sign up.
 */
export const signUp = async (
    nameValue: string, 
    lastNameValue: string, 
    emailValue: string, 
    passwordValue: string, 
    hasAgreedTerms: boolean,
    HasSuscribed: boolean,
    setSignUpError: (errorMessage: string) => void
    ) => {
    
    // Envoi des données au serveur pour l'inscription
    const { data, error } = await supabase.auth.signUp({
        email: emailValue,
        password: passwordValue,
        options: {
            data: {
                name: nameValue,
                lastname: lastNameValue,
                hasAgreedTerms,
                HasSuscribed
            }
        }
    });
    error && setSignUpError(error.message);
    
    return data
};

/**
 * Sign in a user with the provided email and password.
 * 
 * @param emailValue - The email of the user.
 * @param passwordValue - The password of the user.
 * @returns The user information after signing in.
 */
export const signIn = async (emailValue: string, passwordValue: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: emailValue,
        password: passwordValue
    }
  )
    error && console.log(error.message);
    
    return data
}
    /**
     * Handles the logout functionality.
     * 
     * This function signs out the user from the Supabase authentication service.
     * 
     * @returns {Promise<void>} A promise that resolves when the user is successfully signed out.
     * @throws {Error} If there is an error during the sign out process.
     */
export const handleLogout = async () => {
    
    const { error } = await supabase.auth.signOut();
    console.log(error);
    
};

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,32}$/
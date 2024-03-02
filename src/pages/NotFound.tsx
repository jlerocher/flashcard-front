import { useEffect } from "react"
import { Link } from "react-router-dom"
import robo404 from "../assets/robo_404.jpeg"

function NotFound() {
    useEffect(() => {
        document.title = "La page n'existe pas - FlashCards"
    } , []
    )
  return (
    <div className='mx-10 my-10 py-20 text-center border shadow-xl space-y-10'>
        <img src={robo404} alt="404" className="mx-auto w-3/4" />
        <p className="text-3xl font-body font-bold">
            La page que vous demandez n'existe pas.
        </p>
        <p>
            <Link to="/" className='text-blue-500'>Retourner à l'accueil</Link>
        </p>
    </div>
  )
}

export default NotFound
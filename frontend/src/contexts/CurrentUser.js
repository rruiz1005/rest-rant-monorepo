import { createContext, useEffect, useState } from "react";


export const CurrentUser = createContext()

function CurrentUserProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null)
    window.setCurrentUser = setCurrentUser
    useEffect (() => {

        const getLoggedInUser = async () => {
            let response = await fetch('http://localhost:5000/authentication/profile', {
                credentials: 'include'
            })
            let user = await response.json()
            setCurrentUser(user)
        }
        getLoggedInUser()
    }, [])
    return (
        <CurrentUser.Provider value={{ CurrentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider
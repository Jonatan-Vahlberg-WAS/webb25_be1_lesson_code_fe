import { useAuth } from "../contexts/authContext"


export default function RequireAuth({children, roles = [], showMessage = true}) {

    const auth = useAuth()

    if(!auth.user) {
        return showMessage ? <p>You have to be logged in to access this.</p> : null
    }

    if(roles.length && !roles.includes(auth.user?.role)) {
        return showMessage ? <p>You have to have one of the role(s) '{roles.join(", ")}' in order to access this.</p> : null
    }

    return children
}
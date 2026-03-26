import { AuthProvider } from "../contexts/authContext";


export default function Providers({ children }) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}
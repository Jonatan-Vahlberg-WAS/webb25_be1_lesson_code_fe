import { useState } from "react";
import Modal from "./Modal";
import { useAuth } from "../../contexts/authContext";

export default function LoginModal({ open, onClose }) {

  const auth = useAuth()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    console.log(email, password)
    try {
      await auth.actions.login({email, password})
    } catch (error) {
      console.warn(error)
      const data = await error.json()
      console.log(data)
      if(error.status === 401) {
        setError(data.message)
      }
    }
  }

  return <Modal open={open} onClose={onClose} title="Log in to Motify">
      {!auth.user && <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">
            Email*&nbsp;
          </label>
          <input type="email" required value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">
            Password*&nbsp;
          </label>
          <input type="password" required value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        <div>

        {error && (
          <p className="field-error">{error}</p>
        )}
        </div>
        <button type="submit">
          Login
        </button>
      </form>}
      {auth.user && (
        <div>
          Welcome back `{auth.user.name}`
          <div>
            <button type="button" onClick={auth.actions.logout}>
              Logout
            </button>
          </div>
        </div>
      )}
  </Modal>;
}

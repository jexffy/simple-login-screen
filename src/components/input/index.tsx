import "./style.css"
import { InputProps } from "../../interfaces/input"

export const Email = ({ label }: InputProps) => {
  return (
    <>
      {label && <label
        htmlFor="email"
        className="label">
        {label}
      </label>}
      <input
        type="email"
        id="email"
        className="input"
      />
    </>
  )
}

export const Password = ({ label }: InputProps) => {
  return (
    <>
      {label && <label
        htmlFor="password"
        className="label">
        {label}
      </label>}
      <input
        type="password"
        id="password"
        className="input"
      />
    </>
  )
}

const Input = {
  Email,
  Password
}

export default Input

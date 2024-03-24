import Button from "./components/button"
import Input from "./components/input"

const App = () => {

  return (
    <>
      <div className="container">
        <div className="form-container">
          <div className="questions-container">
            <Input.Email label="Email:" />
            <Input.Password label="Password:" />
          </div>
          <br />
          <Button />
        </div>
      </div>
    </>
  )
}

export default App

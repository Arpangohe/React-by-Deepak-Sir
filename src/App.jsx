import "./style.css";
const App =()=>{
  const style1 = {
    fontSize: "50px",
    color: "blue",
  }

  const buttoncss = {
    fontSize: "20px",
    color: "red",
    borderRadius: "10px"
  }

  return(
    <>
    <h1>Hello</h1>
    <div style={{fontSize:"40px", color:"red"}}>Arpan</div>
    <div style={style1}>This is the example of CSS</div>
    <buttton style={buttoncss}>Punch Me</buttton>

    <h1> Next One</h1>

    <button className="btn"> External Name</button>
    </>
  )
}

export default App;
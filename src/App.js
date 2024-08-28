import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";


function App() {

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    console.log('userAgent>>', userAgent)

    if (/android/i.test(userAgent)) {
      window.location.href = "https://idanim.sng.link/Bl2li/rvq9/l0s9";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.href = "https://idanim.sng.link/Cl2li/htfa/69jl";
    } else {
      window.location.href = 'https://www.idanim.com/idanim-mobile-app-download'
    }
  }, []);

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Let's start Deep Linking :) :p</p>
      </header>
    </div>
  );
}

export default App;

import React from 'react'
import avatar from '../images/avatar.png'
import gclogo from "../images/google-center-logo.png"
import { Link } from 'react-router-dom';
import { PiDotsNineBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";


export default function Main() {
    return (
        <div className="App" style={{
            backgroundColor: "#202124",
            height: "45rem",
            width: "96rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>

            <header className="" style={{
                height: "10vh",
                width: "100vw",
                position: "fixed",
                top: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: "0 20px",
            }}>

                <span className="" style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "20px",
                    color: "#fff",
                    paddingRight: "20px"
                }}>
                    <Link to="#" style={{ textDecoration: "none", color: "#fff", fontSize: ".9rem" }}>Gmail</Link>
                    <Link to="#" style={{ textDecoration: "none", color: "#fff", fontSize: ".9rem" }}>Images</Link>
                    <PiDotsNineBold className="nav-icons" fontSize={25} style={{ cursor: "pointer" }} />
                    <img className="nav-icons" src={avatar} alt="logo" style={{ height: "35px", width: "35px", cursor: "pointer" }} />
                </span>
            </header>
            <div className="main-sec" style={{ height: "90vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1.7rem" }}>
                <img src={gclogo} className="" t="logo" style={{ width: "20%" }} />

                <div className="search-sec" style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    width: "40%",
                    gap: "20px",
                    padding: "10px 20px",
                    borderRadius: "30px",
                    border: "1px solid #9aa0a6",
                    // backgroundColor: "#303134",
                }}>
                    <IoSearch color='#9aa0a6' fontSize={"1.5rem"} style={{backgroundColor: "inherit"}} />
                    <input style={{ width: "100%", height: "100%", border: "none", background: "transparent", outline: "none" }} className="search-bar" />
                    <svg style={{ height: "23px", width: "30px", backgroundColor: "inherit" }} class="goxjub" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc04" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>
                    <svg style={{ height: "30px", width: "30px", backgroundColor: "inherit" }} class="Gdd5U" focusable="false" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="192" width="192"></rect><g><circle fill="#34a853" cx="144.07" cy="144" r="16"></circle><circle fill="#4285f4" cx="96.07" cy="104" r="24"></circle><path fill="#ea4335" d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"></path><path fill="#fbbc04" d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"></path><path fill="#4285f4" d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"></path></g></svg>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                    <button style={{
                        backgroundColor: "#303134",
                        border: "none",
                        color: "#fff",
                        width: "150px",
                        height: "40px",
                        borderRadius: "5px"
                    }} className="btn">Google Search</button>
                    <button style={{
                        backgroundColor: "#303134",
                        border: "none",
                        color: "#fff",
                        width: "150px",
                        height: "40px",
                        borderRadius: "5px"
                    }} className="btn">I'm Feeling Lucky</button>
                </div>
                <span style={{ color: "#9aa0a6" }}>
                    Google offered in: 
                    <span className='gglang' style={{
                        color:"#6286cd",
                        cursor:"pointer",
                        fontSize:".9rem"
                    }}> हिन्दी </span>
                    <span className='gglang' style={{
                        color:"#6286cd",
                        cursor:"pointer",
                        fontSize:".9rem"
                    }}>বাংলা </span>
                    <span className='gglang' style={{
                        color:"#6286cd",
                        cursor:"pointer",
                        fontSize:".9rem"
                    }}>తెలుగు </span>
                    <span className='gglang' style={{
                        color:"#6286cd",
                        cursor:"pointer",
                        fontSize:".9rem"
                    }}>मराठी </span>
                    <span className='gglang' style={{
                        color:"#6286cd",
                        cursor:"pointer",
                        fontSize:".9rem"
                    }}>தமிழ் </span>
                    <span className='gglang' style={{
                        color:"#6286cd",
                        cursor:"pointer",
                        fontSize:".9rem"
                    }}>ગુજરાતી </span>
                    <span className='gglang' style={{
                        color:"#6286cd",
                        cursor:"pointer",
                        fontSize:".9rem"
                    }}>ಕನ್ನಡ </span>
                    <span className='gglang' style={{
                        color:"#6286cd",
                        cursor:"pointer",
                        fontSize:".9rem"
                    }}>മലയാളം </span>
                    <span className='gglang' style={{
                        color:"#6286cd",
                        cursor:"pointer",
                        fontSize:".9rem"
                    }}>ਪੰਜਾਬੀ</span>
                </span>

            </div>
        </div>
    )
}

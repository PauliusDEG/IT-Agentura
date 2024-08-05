import React from 'react';
import "./App.css"
import { Link, Outlet, useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation(); 

  const navBarClass = () => {
    switch (location.pathname) {
      case '/ApieMus':
        return 'navbar-ApieMus';
      case '/Portfelis':
        return 'navbar-Portfelis';
      case '/Kontaktai':
        return 'navbar-Kontaktai';  
      case '/Susisiekite':
        return 'navbar-Susisiekite';
      default:
        return 'navbar-home';
    }
  }

  return (
    <div>
      <div className={navBarClass()}>
        <div className="logo">
          <p></p>
        </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ApieMus">Apie Mus</Link>
          </li>
          <li>
            <Link to="/Portfelis">Portfelis</Link>
          </li>
          <li>
            <Link to="/Kontaktai">Kontaktai</Link>
          </li>
          <li>
            <Link to="/Susisiekite"><button id="btn-one">Susisiekite</button></Link>
          </li>
        </ul>
      </nav>
      </div>
      
      <Outlet />
      <div className="footer">
        <div className="section-one">
        <div className="logas">
          <img id="foot-logo" src="..//src/assets/Logo.svg" alt="Logo" />
          <p>Mes esame strategų ir skaitmeninių inovatorių komanda, suvienyta siekiant meistriškumo ir pilnatvės.</p>
        </div>
        <div className="puslapiai">
          <h2>Puslapiai</h2>
          <p>Pagrindinis</p>
          <p>Apie mus</p>
          <p>Kontaktai</p>
          <p>Portfolio</p>
        </div>
        <div className="straipsniai">
           <h2>Straipsniai</h2>
          <p>Stiliaus gidas kas tai?</p>
          <p>Kokie pulapiai yra būtini jūsų svetainei?</p>
          <p>Licencijos: Kas Jos Reikšmė ir Kodėl Tai Svarbu</p>
          <p>Kaip Sekti Naujoves ir Pakeitimus?</p>
          <p>Klaidos puslapis 404, kam jis reikalingas? </p>
          <p>Kaip susikurti saugų slaptažodį? </p>
        </div>
        <div className="prenumeruok">
           <h2 className="pre-tek">Prenumeruokite naujienas</h2>
          <input type="text" placeholder='Įveskite savo el. paštą čia'/>
          <button id="btn-pre">Prenumeruoti</button>
          </div>
        </div>
        <div id="linija">
        <hr />
        </div>
      <div className="section-two">
        <div id="autoriaus">
          <h2>Autoriaus teisės priklauso</h2>
          <p>Dizainas: VCS+IV</p>
        </div>
        <div id="susisieki">
          <h2>Susisiekite</h2>
          <p>+370 123 45 745</p>
        </div>
        <div id="adresas">
          <h2>Adresas</h2>
          <p>Vytauto gatvė 10A, Kaunas</p>
        </div>
        <div id="socials">
        <img src="..//src/assets/Socials.svg" alt="Logo" style={{
          color: 'grey',
        }}/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default App;

import React from 'react'
import './Pradinis.css'

const Pradinis = () => {
  return (
    <div>
            <div className='header'>
                <div id="text-one">
                    <h2>Pasiruošę pakelti <h2 id="orange">savo verslo augimą</h2>  į kitą lygį?</h2>
                    <p>Išbandykite nemokamą bandomąją versiją ir keliaukite į naują verslo lygį kartu su mumis!</p>
                    <button><svg id="svg-one" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 9H8v2h4v3l4-4-4-4v3z"></path></g></svg> Išbandykite nemokamai</button>
                    <p style={{
                        marginTop: '200px',
                        color: '#FF6600',
                    }}>Mumis pasitiki pirmaujantys prekės ženklai</p>
                    <img src="..//src/assets/HeaderLogos.svg" alt="aaaa" style={{
                        width: '600px',
                        cursor: 'pointer'
                    }} />
                </div>
            
                   
            </div>
            <div className="paslaugos">
                <div id="text-box2">
                    <h4>Mūsų Paslaugos </h4>
                    <h2>Paslaugos, kurios turės didelį poveikį jūsų verslui </h2>
                </div>
                <div className="options">
                    <div id="boxas">
                    <svg id="svone" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                        </svg>
             
                        <h3>Turinio Marketingas </h3>
                        <p>Mūsų specialistai kuria įtraukiantį turinį, kuris iškarto patiks jūsų auditorijai ir skatins natūralų srautą.</p>
                    </div>
                    <div id="boxas">
                    <svg id="svone" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M136.6 138.79a64.003 64.003 0 0 0-43.31 41.35L0 460l14.69 14.69L164.8 324.58c-2.99-6.26-4.8-13.18-4.8-20.58 0-26.51 21.49-48 48-48s48 21.49 48 48-21.49 48-48 48c-7.4 0-14.32-1.81-20.58-4.8L37.31 497.31 52 512l279.86-93.29a64.003 64.003 0 0 0 41.35-43.31L416 224 288 96l-151.4 42.79zm361.34-64.62l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.75 18.75-49.15 0-67.91z"></path></svg>
                        <h3>Grafinis Dizainas  </h3>
                        <p>Pasinaudokite vizualinio pasakojimo galia su mūsų ekspertų grafinio dizaino paslaugomis, pritaikytomis kūrybiškam jūsų prekės ženklo kilimui ir dėmesio pritraukimui.</p>
                    </div>
                    <div id="boxas">
                    <svg id="svone" stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                        <h3>Skaitmeninis Marketingas  </h3>
                        <p>Pakelkite savo prekės ženklą internete su mūsų duomenimis paremtomis skaitmeninio marketingo strategijomis. Nuo SEO ir turinio rinkodaros</p>
                    </div>
                    <div id="boxas">
                    <svg  id="svone" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>
                        <h3>Tinklalapių Dizainas </h3>
                        <p>Mes specializuojamės kuriant vizualiai įspūdingas, naudotojui patrauklias interneto svetaines, kurios atitinka jūsų prekės identitetą ir teikia išskirtinę patirtį.</p>
                    </div>
                    <div id="boxas">
                        <svg id="svone" stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M21.604 18.594c-.009-.481-.222-1.262-.539-1.511a.246.246 0 00-.388.118 7.113 7.113 0 01-.346.875 6.373 6.373 0 01-1.568 2.209c-.84.777-1.84 1.331-2.817 1.725-.244.099-.485.187-.722.266l-.006.002c-.158.053-.314.101-.467.146l-.003.001-.22.063-.012.003c-.148.04-.292.078-.433.112l-.017.004-.192.045-.016.004c-.135.03-.264.058-.39.083l-.025.005a22.224 22.224 0 01-.52.093l-.028.004-.136.02-.017.004a23.763 23.763 0 01-.28.038l-.14.017a8.982 8.982 0 01-.543.05h-.004c-4.09.429 1.038 1.325 4.895.647l.026-.005a13.344 13.344 0 00.683-.142c.036-.01.074-.018.11-.027a6.64 6.64 0 001.387-.503c2.386-1.155 2.617-3.084 2.617-3.084.08-.366.12-.782.111-1.262m-10.28-2.832a1.768 1.768 0 00-.3-.535c-.446-.695-1.066-1.322-1.694-1.848a10.72 10.72 0 00-1.043-.792c-.807-.557-1.44-.88-1.44-.88h-.002c-.96-.48-1.836-.01-2.067 1.085a4.605 4.605 0 00.615 3.48c.46.738 1.169 1.088 2.018 1.167.53.05 1.063.079 1.595.117.433.01.865.04 1.286-.103.555-.188.983-.526 1.078-1.123a1.187 1.187 0 00-.045-.568m3.368 1.695c.606.08 1.211.178 1.822.213.82.048 1.44-.215 1.9-.71.575-.62.84-1.341.795-2.15-.045-.814-.759-1.295-1.725-1.127-.863.149-1.628.485-2.402.795-.684.273-1.326.602-1.828 1.068-.707.656-.306 1.525.822 1.798.202.049.41.076.616.113M0 12.532c.023-.375-.033-.812.038-1.248.119-.732.508-1.265 1.166-1.598.163-.082.262-.167.3-.369.286-1.572.917-3 1.85-4.296.107-.148.192-.25.055-.444-.175-.245-.05-.47.132-.675C4.856 2.428 6.44 1.336 8.323.755c4.493-1.386 8.453-.438 11.835 2.842.312.303.729.608.33 1.14-.066.088.052.166.103.235a10.426 10.426 0 011.895 4.4c.031.18.142.236.272.301.813.412 1.212 1.092 1.216 1.985.003.806.083 1.617-.052 2.419-.193 1.153-1.367 1.957-2.503 1.722-.345-.072-.436-.337-.434-.66.006-1.324.032-2.647 0-3.97-.085-3.555-1.69-6.233-4.8-7.942-5.201-2.86-11.874.31-13.02 6.141-.198 1.014-.164 2.032-.153 3.053.01.95 0 1.901-.024 2.851-.008.334-.204.522-.56.539-1.45.067-2.425-.854-2.428-2.304v-.975Z"></path></svg>
                        <h3>IT konsultacijos</h3>
                        <p>IT konsultacija, tai paslaugų teikimo praktika, kurioje teikiame patarimus ir įgyvendinimo paslaugas, susijusias su informacinių technologijų sritimi.</p>
                    </div>
                    <div id="boxas">
                    <svg id="svone" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M4.873 3h14.254a1 1 0 0 1 .809.412l3.823 5.256a.5.5 0 0 1-.037.633L12.367 21.602a.5.5 0 0 1-.734 0L.278 9.302a.5.5 0 0 1-.037-.634l3.823-5.256A1 1 0 0 1 4.873 3z"></path></g></svg>
                        <h3>Prekės ženklo identitetas</h3>
                        <p>Tai apima unikalios ir atpažįstamos tapatybės kūrimą, kuri išskiria prekės ženklą iš konkurentų bei atitinka tikslinę auditoriją.</p>
                    </div>
                </div>
            </div>
                <div className="apie-mus-box">
                    <div className="pavieksliukas">
                        <img src="..//src/assets/StoviCekis.svg" alt="Stovi" style={{
                            marginRight: "50px"
                        }} />
                    </div>
                <div className="tekstasApie">
                        <h4 id="apie">Apie mus</h4>
                        <h2>Pagrindinė misija slypinti už visų mūsų darbų</h2>
                        <p>Sukurti technologijų sprendimus, kurie transformuoja ir praturtina verslo veiklą..</p>
                        <div id="skaiciai">
                            <div id="skaicius">
                                <h4>330+</h4>
                                <p>Verslams padėta</p>
                            </div>
                            <div id="skaicius">
                                <h4>230+</h4>
                                <p>Sugeneruota pajamų</p>
                            </div>
                            
                        </div>
                        <button><svg id="svg-three" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 9H8v2h4v3l4-4-4-4v3z"></path></g></svg> Išbandykite nemokamai</button>
                </div>
                </div>
                <div className="last-section">
                    <div className="procesas">
                        <h4>Procesas</h4>
                        <h2>Procesas, kuris skatina pažangą</h2>
                         <img src="..//src/assets/Procesas.svg" alt="aaaa" style={{
                            marginBottom: '150px'
                         }}></img>
                    </div> 
                </div>
                <div className="naujausi-darbai">
                    <h2>Naujausi darbai</h2>
                    <div className="pictures">
                    <div className="pic-box">
                         <img src="..//src/assets/FotoVienas.svg" alt="" /> 
                         <h4>Tinklalapių vartotojo sąsajos dizainas</h4>
                         <p>Kūrybinis vartotojo sąsajos dizainas</p>  
                    </div>
                    <div className="pic-box">
                    <button id="button-four"><svg id="svg-four" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 9H8v2h4v3l4-4-4-4v3z"></path></g></svg> Išbandykite nemokamai</button>
                        <img src="..//src/assets/FotoTrys.svg" alt="" />
                        <h4>Kurti skaitmeninę strategiją</h4>
                        <p>Socialinių tinklų Marketingas</p>
                    </div>
                    <div className="pic-box">    
                        <img src="..//src/assets/FotoDu.svg" alt="" />
                        <h4>Vartotojo sąsajos dizainas</h4>
                        <p>Kūrybinis logotipo atnaujinimas</p>
                    </div>
                    <div className="pic-box">
                        <img src="..//src/assets/FotoKeturi.svg" alt="" />
                        <h4>Reklaminių banerių kūrimas</h4>
                        <p>Grafinis dizainas</p>
                    </div>
                    </div>
                </div>
                <div className="feedback">
                    <img src="..//src/assets/Portrait.svg"  alt="Portrait" />
                    <h3>“Patirtis su šia įmone buvo labai teigiama. Verslo augimo paslauga buvo ne tik kokybiška, bet ir pritaikyta mūsų poreikiams. Komunikacija buvo sklandi, o jų gebėjimas greitai reaguoti į mūsų pageidavimus paliko teigiamą įspūdį. ”</h3>
                    <p id="name">Laima Varnaitė</p>
                    <p id="title">Kūrybinė vadybininkė, UAB  Kreatyva</p>
                    <img id="mygai" src="..//src/assets/Buttons.svg" alt="buttons" />
                </div>
         

        
    </div>
  )
}

export default Pradinis

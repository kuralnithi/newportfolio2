import React from 'react';
import Passwordrest from './Password-reset.png';
import dashboardui from '../projectScreenshots/dashboardui.png';
import dice from '../projectScreenshots/dice.png'
import mealfinder from '../projectScreenshots/meal-finder.png'
import namelist from '../projectScreenshots/namelist.png'
import notescontext from '../projectScreenshots/notes-context.png'
import notesredux from '../projectScreenshots/notes-redux.png'
import portfolio from '../projectScreenshots/portfolio.png'
import qrgen from '../projectScreenshots/qr-gen.png'
import restaurent from '../projectScreenshots/restaurent.png'
import api from '../projectScreenshots/api.jpg'
import flight from '../projectScreenshots/Flight.png'
// import travel from '../projectScreenshots/travel.png'

function Projects(props) {
    return (
        <div className='projectpage'>



            <div className="container ">
                <h1 className="mb-4"  data-cursor-magnetic>My Projects</h1>

                <div className="row">
                    {/* <div className="col-md-4">
                        <div className="card project-card">
                            <div className="card-body">
                                <h3 className="card-title mb-3 project-name">Travel Landing Page</h3>
                                <div className="project-links">
                                    <a href="https://github.com/kuralnithi/zentask/tree/main/travel" className="card-link project-link" target="_blank">Front-end Source code</a>
                                    <a href="https://main--chipper-truffle-896a42.netlify.app/travel/travel%20landing%20page" className="card-link project-link" target="_blank">Front-end Deployed URL</a>
                                </div>
                            </div>
                        </div>
                    </div>
 */}


                    <div className="col-md-4">
                        <div className="card project-card">
                            <div className="card-body">
                                <h3 className="card-title mb-3 project-name fs-6 ">Flight ticket booking app  </h3>

                                <div className="img">  <img src={flight} style={{ width: '100%', height: '100%', borderRadius: '20px' }} /></div>


                                <div className="project-links">
                                    <div className='d-flex loginpagelink'>
                                        <a href="https://github.com/kuralnithi/FlightTicketBookingApp-Frontend.git" className="card-link project-link" target="_blank">Front-end Source code</a>

                                        <a href="https://github.com/kuralnithi/FlightTicketBookingApp-Backend.git" className="card-link project-link" target="_blank">Back-end Source code</a>
                                    </div>
                                    <div className='d-flex loginpagelink'>

                                        <a href="https://skyways-kural.netlify.app/" className="card-link project-link" target="_blank">Front-end Deployed URL</a>

                                        <a href="https://fligthback.onrender.com/"
                                            className="card-link project-link"
                                            target="_blank">Back-end Deployed URL
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    
                    <div className="col-md-4">
                        <div className="card project-card">
                            <div className="card-body">
                                <h3 className="card-title mb-3 project-name">Restaurant Landing Page</h3>


                                <div className="img"> <img src={restaurent} alt="" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />  </div>


                                <div className="project-links">
                                    <a href="https://github.com/kuralnithi/restauranttask/tree/main/restaurant" className="card-link project-link" target="_blank">Front-end Source code</a>
                                    <a href="https://restauran-task-kuralnithi.netlify.app/restaurant" className="card-link project-link" target="_blank">Front-end Deployed URL</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card project-card">
                            <div className="card-body">
                                <h3 className="card-title mb-3 project-name">Dice Game</h3>


                                <div className="img"> <img src={dice} alt="" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />  </div>


                                <div className="project-links">
                                    <a href="https://github.com/kuralnithi/Dicegame/tree/main/dicegame" className="card-link project-link" target="_blank">Front-end Source code</a>
                                    <a href="https://dicegame-kuralnithi.netlify.app/dicegame/dicegame.html" className="card-link project-link" target="_blank">Front-end Deployed URL</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card project-card">
                            <div className="card-body">
                                <h3 className="card-title mb-3 project-name">Name List Cards</h3>


                                <div className="img"> <img src={namelist} alt="" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />  </div>


                                <div className="project-links">
                                    <a href="https://github.com/kuralnithi/namelist/tree/main/namelist" className="card-link project-link" target="_blank">Front-end Source code</a>
                                    <a href="https://namelist-by-kuralnithi.netlify.app/namelist/index.html" className="card-link project-link" target="_blank">Front-end Deployed URL</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4">
                        <div className="card project-card">
                            <div className="card-body">
                                <h3 className="card-title mb-3 project-name">Port-folio</h3>


                                <div className="img"> <img src={portfolio} alt="" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />  </div>


                                <div className="project-links">
                                    <a href="https://github.com/kuralnithi/portfoliokuralnithi" className="card-link project-link" target="_blank">Front-end Source code</a>
                                    <a href="https://portfolio-kural.netlify.app" className="card-link project-link" target="_blank">Front-end Deployed URL</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card project-card">
                            <div className="card-body">
                                <h3 className="card-title mb-3 project-name">QR code getmentor</h3>


                                <div className="img"> <img src={qrgen} alt="" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />  </div>


                                <div className="project-links">
                                    <a href="https://github.com/kuralnithi/qrkural" className="card-link project-link" target="_blank">Front-end Source code</a>
                                    <a href="https://celebrated-salmiakki-fbcaa7.netlify.app/qr.html" className="card-link project-link" target="_blank">Front-end Deployed URL</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card project-card">
                            <div className="card-body">
                                <h3 className="card-title mb-3 project-name">Meal finder</h3>


                                <div className="img"> <img src={mealfinder} alt="" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />  </div>


                                <div className="project-links">
                                    <a href="https://github.com/kuralnithi/mealskuralnithi" className="card-link project-link" target="_blank">Front-end Source code</a>
                                    <a href="https://fantastic-cat-25d43e.netlify.app" className="card-link project-link" target="_blank">Front-end Deployed URL</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card project-card">
                            <div className="card-body">
                                <h3 className="card-title mb-3 project-name">Dashboard UI</h3>


                                <div className="img"> <img src={dashboardui} alt="" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />  </div>


                                <div className="project-links">
                                    <a href="https://github.com/kuralnithi/Dashboard.git" className="card-link project-link" target="_blank">Front-end Source code</a>
                                    <a href="https://dashboard-kural.netlify.app/" className="card-link project-link" target="_blank">Front-end Deployed URL</a>
                                </div>
                            </div>
                        </div>
                    </div>








                    <div className="col-md-4">
                        <div className="card project-card">
                            <div className="card-body">
                                <h3 className="card-title mb-3 project-name">Notes app using CONTEXT </h3>


                                <div className="img"> <img src={notescontext} alt="" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />  </div>



                                <div className="project-links">
                                    <a href=" https://github.com/kuralnithi/Notes-UseContext.git" className="card-link project-link" target="_blank">Front-end Source code</a>
                                    <a href="https://notes-usecontext-kural.netlify.app/" className="card-link project-link" target="_blank">Front-end Deployed URL</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card project-card">
                            <div className="card-body">
                                <h3 className="card-title mb-3 project-name">Notes app using Redux  </h3>

                                <div className="img"> <img src={notesredux} alt="" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />  </div>



                                <div className="project-links">

                                    <a href="https://github.com/kuralnithi/NotesAPPredux.git" className="card-link project-link" target="_blank">Front-end Source code</a>
                                    <a href="https://notes-redux-kural.netlify.app" className="card-link project-link" target="_blank">Front-end Deployed URL</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4">
                        <div className="card project-card">
                            <div className="card-body">
                                <h3 className="card-title mb-3 project-name">Hall-Booking API-NodeJS </h3>



                                <div className="img"> <img src={api} alt="" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />  </div>


                                <div className="project-links">

                                    <a href="https://github.com/kuralnithi/hall-booking.git" className="card-link project-link" target="_blank">Back-end Source code</a>
                                    <a href="https://hall-booking-dxhx.onrender.com/api/hall/bookedrooms" className="card-link project-link" target="_blank">Back-end Deployed URL</a>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="col-md-4">
                        <div className="card project-card">
                            <div className="card-body">
                                <h3 className="card-title mb-3 project-name fs-5">assign-mentor (node+mongodb)    </h3>

                                <div className="img"> <img src={api} alt="" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />  </div>

                                <div className="project-links">

                                    <a href="https://github.com/kuralnithi/assign-mentor.git" className="card-link project-link" target="_blank">Back-end Source code</a>
                                    <a href="https://assign-mentor-dp46.onrender.com/" className="card-link project-link" target="_blank">Back-end Deployed URL</a>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className="col-md-4">
                        <div className="card project-card">
                            <div className="card-body">
                                <h3 className="card-title mb-3 project-name fs-6 ">Login page + password-reset-flow   </h3>

                                <div className="img">  <img src={Passwordrest} style={{ width: '100%', height: '100%', borderRadius: '20px' }} /></div>


                                <div className="project-links">
                                    <div className='d-flex loginpagelink'>
                                        <a href="https://github.com/kuralnithi/password-reset.git" className="card-link project-link" target="_blank">Front-end Source code</a>

                                        <a href="https://github.com/kuralnithi/password-reset-backend.git" className="card-link project-link" target="_blank">Back-end Source code</a>
                                    </div>
                                    <div className='d-flex loginpagelink'>

                                        <a href="https://password-reset-kuralnithi.netlify.app" className="card-link project-link" target="_blank">Front-end Deployed URL</a>

                                        <a href="https://password-reset-ze4r.onrender.com"
                                            className="card-link project-link"
                                            target="_blank">Back-end Deployed URL
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>



            </div>




        </div>
    );
}

export default Projects;
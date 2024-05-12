import './SectionApp.css'

function SectionApp(){
    return(

        <section className="app-section">
            
            <div className="container">

                <div className="detail-box">

                    <h2>
                    <span>Get the</span> <br/> Delfood App
                    </h2>

                    <p>
                        long established fact that a reader will be distracted by the
                        <br/>readable content of a page when looking at its layout. The poin    
                    </p>

                    <div className='img-box'>
                        <img src="../images/google_play.png" />
                        <img src="../images/app_store.png" />
                    </div>

                    <button>Download Now</button>

                </div>

                <img className='img-mobile' src="../images/mobile.png"/>

            </div>

        </section>
            
    )
}

export default SectionApp;
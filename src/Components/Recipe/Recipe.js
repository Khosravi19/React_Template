import './Recipe.css'

function Recipe() {
    return(

        <section className='recipe-section'>
            <h2>Our Best Popular Recipes</h2>
            
            
            <div className="row">

                <div className="img-box">
                        <img src="../images/r1.jpg"/>
                    <div className="detail-box">
                        <h4>Breakfast</h4>
                        <a href="#"><i class="bi bi-arrow-right-circle-fill" /></a>
                    </div>
                </div>

                <div className="img-box">
                        <img src="../images/r2.jpg"/>
                    <div className="detail-box">
                        <h4>Lunch</h4>
                        <a href="#"><i class="bi bi-arrow-right-circle-fill" /></a>
                    </div>
                </div>

                <div className="img-box">
                        <img src="../images/r3.jpg"/>
                    <div className="detail-box">
                        <h4>Dinner</h4>
                        <a href="#"><i class="bi bi-arrow-right-circle-fill" /></a>
                    </div>
                </div>

            </div>

            <button>Order Now</button>

        </section>
    )
}

export default Recipe;
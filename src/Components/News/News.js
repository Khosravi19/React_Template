import './News.css'

function News(){
    return(
    <>
        <div className="news-heading">
             <h2>Latest News</h2>
        </div>

        <div className='news-img'>

            <div className="box">
                <img src="../images/n1.jpg" />
            </div>

            <div className="box">
                <img src="../images/n2.jpg" />
            </div>

        </div>

        <div className="news-detail">

            <div className="box">
                <h4>Tasty Food For you</h4>
                <p>
                there isn't anything embarrassing hidden in the middle of text. All the <br/>rem sum generators on the Internet tend to repeat predefined
                </p>
                <a href="#"><i class="bi bi-arrow-right-circle-fill" /></a>
            </div>

            <div className="box">
                <h4>Breakfast For you</h4>
                <p>
                there isn't anything embarrassing hidden in the middle of text. All the
                <br/>rem sum generators on the Internet tend to repeat predefined
                </p>
                <a href="#"><i class="bi bi-arrow-right-circle-fill" /></a>
            </div>

        </div>

    </>
    )
}

export default News;
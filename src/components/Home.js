import basket from "../images/basket.svg"
import madrid from "../images/Madrid.jpg";
import paris from "../images/Paris.jpg";
import reykjavik from "../images/Reykjavik.jpg";
import Container from 'react-bootstrap/Container'
function Home() {
    return (
        <div>
            <Container>
            <br/>
            <h1>Find and compare flight tickets</h1>
      
            <i>At Just Travel you can search for a specific flight, compare, book and save money.</i>
            <br/>
            <i>You can also see all available flight tickets and feel inspired.</i>

            <br/>
            <br/>
            <br/>

            <h4>Top destinations</h4>

  
            <br/>

            <div className="container">
                <div className="row">

                    <div className="col-4">
                        <div className="card my-card">
                            <img src={madrid} className="card-img-top" alt="Madrid" />
                            <div className="card-body">
                                <h5 className="city-madrid">Madrid, Spain</h5>
                                <p className="madrid-description">Madrid is the capital city of Spain, located right in the centre of the Iberian Peninsula. Its geographical location grants good communications of the city with other Spanish regions. As capital of the country, it is the seat to the Spanish government institutions and the city of residence of Spanish Royal family.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card my-card">
                            <img src={paris} className="card-img-top" alt="Paris" />
                            <div className="card-body">
                                <h5 className="city-paris">Paris, France</h5>
                                <p className="paris-description">Paris (nicknamed the "City of light") is the capital city of France, and the largest city in France. ... Paris is also the center of French economy, politics, traffic and culture. Paris has many art museums and historical buildings. As a traffic center, Paris has a very good underground subway system (called the Metro).</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card my-card">
                            <img src={reykjavik} className="card-img-top" alt="Reykjavik" />
                            <div className="card-body">
                                <h5 className="city-reykjavik">Reykjavik, Iceland</h5>
                                <p className="reykjavik-description">Reykjavik is by far the largest municipality in Iceland and as well the capital city of the country. The capital area has about a total of 60% of Iceland’s population, which is about 320.000 people. Reykjavik is the northernmost capital in the world. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default Home;
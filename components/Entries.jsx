export default function Entries(){
    return(
        <>
        <div className="entries-container">


        <article className="card-container">

        <img src="/images.jpg" alt=""  className="mountain-img"/>


        <div className="information-container">
        <span className="marker-p">
        <img src="/marker.png" alt="marker"  className="img-marker"/><p>JAPAN</p><a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"><p className="google">View on Google Maps</p></a>
        </span>
        <h1 className="mount">Mount Fuji</h1>
        <p className="date">12 Jan, 2023 - 24 Jan, 2023</p>
        <p className="info">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).<br/> Mount Fuji is the single most popular tourist site in Japan, <br></br>for both Japanese and foreign tourists.
        </p>      
        </div>


        </article>


        </div>
        </>
    );
}
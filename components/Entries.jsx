export default function Entries(information){
    return(
        <>
        <div className="entries-container">


        <article className="card-container">

        <img src={information.img} alt=""  className="mountain-img"/>


        <div className="information-container">
        <span className="marker-p">
        <img src="/marker.png" alt="marker"  className="img-marker"/><p>{information.cityName}</p><a href={information.cityUrl}><p className="google">View on Google Maps</p></a>
        </span>
        <h1 className="mount">{information.site}</h1>
        <p className="date">{information.date}</p>
        <p className="info">
            {information.info}
            </p>      
        </div>


        </article>


        </div>
        </>
    );
}
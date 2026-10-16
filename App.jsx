import Header from"./components/header"
import Entries from "./components/Entries";

export default function App(){

    return(
       <>
       <Header />
       <Entries
       img ="./images.jpg"
       cityName = "japan"
       cityUrl = "//www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
       site = "MOUNT FUJI"
       date = "12 Jan, 2027 - 24 Jan, 2027"
       info = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
       
       />
         <Entries
       img ="./ot.jpg"
       cityName = "MANCHESTER"
       cityUrl = "https://www.google.com/maps/place/Old+Trafford,+Stretford,+Manchester,+UK/@53.4597949,-2.2983667,14z/data=!3m1!4b1!4m6!3m5!1s0x487bade198f6a2ab:0xa06b7a1e162e18f9!8m2!3d53.462094!4d-2.2766419!16zL20vMDdjZDc4?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D"
       site = "OLD TRAFFORD"
       date = " 29 jun, 2027 - 8 jul, 2027"
       info = "Old Trafford, nicknamed the Theatre of Dreams by English football legend Sir Bobby Charlton, is the iconic home stadium of Manchester United Football Club. Located in Greater Manchester, England, it is the largest club football stadium in the United Kingdom and the second-largest overall after Wembley Stadium "
       
       />
       
        </>
    );


}
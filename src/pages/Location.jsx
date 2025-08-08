function Location(){
    return(
        <>
        <h1>Your Location is : </h1>
        </>
    )
}
export default Location;

// import { useEffect, useState } from "react";

// function Location() {
//   const [city, setCity] = useState("Detecting...");

//   useEffect(() => {
//     fetch("https://ipinfo.io/json?token=58e3f7aef1b7e3")
//       .then(res => res.json())
//       .then(data => {
//         console.log(data); 
//         setCity(data.city || "Unknown");
//       })
//       .catch(err => {
//         console.error("Location fetch error:", err);
//         setCity("Failed to detect");
//       });
//   }, []);

//   return (
//     <p style={{ textAlign: "center", marginTop: "60px" }}>
//        Your current city: <strong>{city}</strong>
//     </p>
//   );
// }

// export default Location;


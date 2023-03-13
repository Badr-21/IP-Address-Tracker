import "../styles/ipOutputStyles/ipOutput.css";
export function IpOutput() {
   return (
      <section className="ip-output">
         <div className="ip-address">
            <h2>IP Address</h2>
            <p>192.212.174.101</p>
         </div>
         <div className="location">
            <h2>Location</h2>
            <p>Brooklyn, NY 10001</p>
         </div>
         <div className="timezone">
            <h2>Timezone</h2>
            <p>UTC-05:00</p>
         </div>
         <div className="isp">
            <h2>ISP</h2>
            <p>Space Starlink</p>
         </div>
      </section>
   );
}

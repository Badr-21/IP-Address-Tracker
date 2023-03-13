import "../styles/headerStyles/header.css";
import { IpInput } from "./IpInput";
export function Header() {
   return (
      <header className="header">
         <h1>IP Address Tracker</h1>
         <IpInput />
      </header>
   );
}

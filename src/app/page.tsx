// pre-loaded custom fonts
import SwitchButton from "./components/SwitchButton";
import { chopsin, anantason, sukhumvit_medium, sukhumvit_text } from "./fonts";
import "./page.css";

export default function Home() {
  return (
    <div className="header">
      <SwitchButton></SwitchButton>
      <h1 className={`${chopsin.className} text-9xl`} id="lakronvidva-heading">
        LAKORNVIDVA
      </h1>
    </div>
  );
}

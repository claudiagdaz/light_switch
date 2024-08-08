import { useState } from "react";
import "./Room.css";
import { GoSun, GoMoon, GoLightBulb } from "react-icons/go";

function Room() {
  const [isLit, setIsLit] = useState(false);
  const [temperature, setTemperature] = useState(22);
  const brightness = isLit ? "lit" : "dark";

  return (
    <div className={`room ${brightness}`}>
      the room is {brightness} and {temperature}°C
      <br />
      <button onClick={() => setIsLit(!isLit)}>
        Flip the switch <GoLightBulb />
      </button>
      <button onClick={() => setIsLit(true)}>
        <GoSun />{" "}
      </button>
      <button onClick={() => setIsLit(false)}>
        <GoMoon />
      </button>
      <br />
      <button onClick={() => setTemperature(temperature + 1)}>
        {" "}
        Turn off the AC
      </button>
      <button onClick={() => setTemperature(temperature - 1)}>
        {" "}
        Turn on the AC
      </button>
    </div>
  );
}

export default Room;

import { useState } from "react";

const useVisibility = (defaultVisibility = false) => {
  const [visibility, setVisibility] = useState(defaultVisibility);

  const handleVisibility = vis => {
    if (typeof vis !== "undefined") {
      setVisibility(vis);
    } else {
      setVisibility(state => !state);
    }
  };

  return [visibility, handleVisibility];
};

export default useVisibility;

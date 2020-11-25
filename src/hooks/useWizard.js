import { useState, useEffect } from "react";

const useWizard = () => {
  const [imageIndex, setImageIndex] = useState(1);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    const interval = setInterval(() => {
      setImageIndex((prev) => {
        if (prev < 3) {
          return prev + 1;
        } else {
          setTrigger(false);
          return 1;
        }
      });
    }, 200);
    return () => clearInterval(interval);
  }, [trigger, imageIndex]);

  return { imageIndex, setTrigger };
};
export default useWizard;

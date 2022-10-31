import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer =
      progress < 100 &&
      setTimeout(() => {
        setProgress((prev) => prev + 10);
        console.log(progress);
      }, 1000);

    // cleanup function
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </div>
  );
};

export default App;

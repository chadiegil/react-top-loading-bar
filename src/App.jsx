import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);
  const delay = 10;

  useEffect(() => {
    progress < 100 &&
      setTimeout(() => {
        setProgress((prev) => prev + 10);
        console.log(progress);
      }, 1000);
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

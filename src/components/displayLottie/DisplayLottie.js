import React, {Component, Suspense} from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

const DisplayLottie = ({ animationData }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData
  };

  return (
    <Suspense fallback={<Loading />}>
      <Lottie
        animationData={defaultOptions.animationData}
        loop={defaultOptions.loop}
      />
    </Suspense>
  );
};

export default DisplayLottie;

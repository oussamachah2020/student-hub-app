import React, { useEffect, useRef } from "react";
import LottieView, { AnimationObject } from "lottie-react-native";

export default function Animation({
  file,
}: {
  file: string | AnimationObject;
}) {
  const animation = useRef<LottieView>(null);

  return (
    <LottieView
      autoPlay
      ref={animation}
      style={{
        width: 300,
        height: 300,
      }}
      source={file}
    />
  );
}

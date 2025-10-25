import { useEffect, useState } from "react";

export function useIsApple() {
  const [isApple, setIsApple] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    setIsApple(/mac|iphone|ipad|ipod/.test(ua));
  }, []);

  return isApple;
}

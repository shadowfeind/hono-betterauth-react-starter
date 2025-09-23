import { useEffect, useState } from "react";

export function useIsApple() {
  const [isApple, setIsApple] = useState(false);

  useEffect(() => {
    const nav = (navigator as any).userAgentData;
    const platform = nav?.platform || navigator.platform;
    setIsApple(/mac|iphone|ipad|ipod/i.test(platform));
  }, []);

  return isApple;
}
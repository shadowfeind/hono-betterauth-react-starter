import { useEffect, useState } from "react";

export function useIsMac() {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    const nav = (navigator as any).userAgentData;
    if (nav?.platform) {
      setIsMac(nav.platform.toLowerCase().includes("mac"));
    } else {
      setIsMac(navigator.userAgent.toLowerCase().includes("mac"));
    }
  }, []);

  return isMac;
}

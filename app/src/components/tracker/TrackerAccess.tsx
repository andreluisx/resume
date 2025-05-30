"use client"
import { useEffect } from 'react';

// You'll need to implement this function or import it
function getClientInfo() {
  return {
    deviceType: navigator.userAgent.includes('Mobile') ? 'mobile' : 'desktop',
    url: window.location.href,
    referrer: document.referrer || null,
    screenResolution: `${screen.width}x${screen.height}`,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
}

export default function TrackAccessClient() {
  useEffect(() => {
    const trackAccess = async () => {
      try {
        const clientInfo = getClientInfo();

        const response = await fetch("/api/track-access", {
          method: "POST",
          headers:{
            "Content-Type": "application/json",
            "x-device": clientInfo.deviceType,
            "x-url": clientInfo.url,
            "x-referrer": clientInfo.referrer ?? "",
            "x-screen-resolution": clientInfo.screenResolution,
            "x-language": clientInfo.language,
            "x-timezone": clientInfo.timezone,
          }
          ,
          body: JSON.stringify(clientInfo), // Send clientInfo directly
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Access tracked:", data);
      } catch (error) {
        console.error("Tracking error:", error);
      }
    };

    // Check if running in browser environment
    if (typeof window !== 'undefined' && !sessionStorage.getItem("access_tracked")) {
      trackAccess();
      sessionStorage.setItem("access_tracked", "true");
    }
  }, []);

  return null;
}
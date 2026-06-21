/// <reference types="vite/client" />

interface Window {
  fbq?: (
    method: "track" | "trackCustom",
    eventName: string,
    parameters?: Record<string, unknown>,
  ) => void;
}

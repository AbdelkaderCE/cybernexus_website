import { track } from "@vercel/analytics";

export type AnalyticsPayload = Record<string, string | number | boolean | null | undefined>;

export function trackEvent(event: string, payload?: AnalyticsPayload) {
  try {
    track(event, payload);
  } catch {
    // Ignore analytics errors in client
  }
}

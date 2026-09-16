"use client";

import { useCallback, useRef } from "react";
import { StudioButton } from "./StudioButton";

const CAL_NAMESPACE = "keshav-portfolio";
const CAL_ORIGIN = "https://cal.com";
const CAL_SCRIPT = "https://app.cal.com/embed/embed.js";

type CalQueueApi = ((instruction: string, ...args: unknown[]) => void) & {
  loaded?: boolean;
  ns?: Record<string, CalQueueApi>;
  q?: unknown[][];
};

declare global {
  interface Window {
    Cal?: CalQueueApi;
  }
}

function bootCalEmbed() {
  if (window.Cal) return window.Cal;

  const queue = (api: CalQueueApi, args: unknown[]) => api.q?.push(args);
  const cal = function (this: unknown, instruction: string, ...args: unknown[]) {
    if (!cal.loaded) {
      cal.ns = {};
      cal.q = [];
      const script = document.createElement("script");
      script.src = CAL_SCRIPT;
      script.async = true;
      document.head.appendChild(script);
      cal.loaded = true;
    }

    if (instruction === "init") {
      const namespace = args[0];
      const namespaceApi = function (this: unknown, ...namespaceArgs: unknown[]) {
        queue(namespaceApi, namespaceArgs);
      } as CalQueueApi;
      namespaceApi.q = [];

      if (typeof namespace === "string") {
        cal.ns![namespace] ??= namespaceApi;
        queue(cal.ns![namespace], [instruction, ...args]);
        queue(cal, ["initNamespace", namespace]);
      } else {
        queue(cal, [instruction, ...args]);
      }
      return;
    }

    queue(cal, [instruction, ...args]);
  } as CalQueueApi;

  window.Cal = cal;
  return cal;
}

export function CalBookingButton() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK?.trim();
  const isReady = useRef(false);

  const configureEmbed = useCallback(() => {
    if (!calLink || isReady.current) return;

    const cal = bootCalEmbed();
    cal("init", CAL_NAMESPACE, { origin: CAL_ORIGIN });
    const portfolioCal = cal.ns?.[CAL_NAMESPACE];
    portfolioCal?.("ui", {
      layout: "month_view",
      theme: "light",
      styles: { branding: { brandColor: "#D34E26" } },
    });
    portfolioCal?.("preload", { calLink });
    isReady.current = true;
  }, [calLink]);

  if (!calLink) return null;

  return (
    <StudioButton
      type="button"
      variant="secondary"
      size="md"
      onClick={() => {
        configureEmbed();
        window.Cal?.ns?.[CAL_NAMESPACE]?.("modal", { calLink });
      }}
    >
      Schedule a working session
    </StudioButton>
  );
}

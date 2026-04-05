"use client";

import { useState, useCallback, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// ISO 3166-1 numeric → display name (only visited countries)
const VISITED: Record<number, string> = {
  840: "🇺🇸 United States",
  124: "🇨🇦 Canada",
  484: "🇲🇽 Mexico",
  170: "🇨🇴 Colombia",
  76:  "🇧🇷 Brazil",
  630: "🇵🇷 Puerto Rico",
  192: "🇨🇺 Cuba",
  826: "🇬🇧 England · Scotland · Wales",
  372: "🇮🇪 Ireland",
  352: "🇮🇸 Iceland",
  250: "🇫🇷 France",
  724: "🇪🇸 Spain",
  620: "🇵🇹 Portugal",
  380: "🇮🇹 Italy",
  40:  "🇦🇹 Austria",
  276: "🇩🇪 Germany",
  348: "🇭🇺 Hungary",
  203: "🇨🇿 Czechia",
  528: "🇳🇱 Netherlands",
  56:  "🇧🇪 Belgium",
  470: "🇲🇹 Malta",
  300: "🇬🇷 Greece",
  504: "🇲🇦 Morocco",
  376: "🇮🇱 Israel",
  792: "🇹🇷 Turkey",
  704: "🇻🇳 Vietnam",
  764: "🇹🇭 Thailand",
  116: "🇰🇭 Cambodia",
  288: "🇬🇭 Ghana",
};

const VISITED_IDS = new Set(Object.keys(VISITED).map(Number));

const LAS_VEGAS: [number, number] = [-115.1398, 36.1699];

const REGIONS = [
  { label: "Americas",    count: 7,  emoji: "🌎" },
  { label: "Europe",      count: 15, emoji: "🌍" },
  { label: "Africa",      count: 2,  emoji: "🌍" },
  { label: "Middle East", count: 2,  emoji: "🌏" },
  { label: "Asia",        count: 3,  emoji: "🌏" },
];

// Explicit palettes — no CSS variable ambiguity on SVG fills
const DARK_PALETTE = {
  visited:         "#0891b2", // cyan-600 — pops on near-black
  visitedHover:    "#22d3ee", // cyan-400
  unvisited:       "#2d3d4f", // blue-gray — clearly visible, not distracting
  unvisitedHover:  "#3f5568",
  pin:             "#f87171", // red-400 — bright enough on dark
  stroke:          "#0a0f14", // near-black country borders
  legendBg:        "rgba(10,15,20,0.85)",
  legendBorder:    "rgba(255,255,255,0.12)",
  legendText:      "#e2e8f0",
};

const LIGHT_PALETTE = {
  visited:         "#0e7490", // cyan-700 — readable on white
  visitedHover:    "#0891b2", // cyan-600
  unvisited:       "#c8d6e5", // steel-blue-tinted gray — clear against white
  unvisitedHover:  "#a0b4c8",
  pin:             "#dc2626", // red-600
  stroke:          "#f0f4f8", // near-white country borders
  legendBg:        "rgba(255,255,255,0.92)",
  legendBorder:    "rgba(0,0,0,0.12)",
  legendText:      "#1e293b",
};

function detectDark(): boolean {
  if (typeof document === "undefined") return true;
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "dark") return true;
  if (attr === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function WorldTravelMap() {
  const [tooltip, setTooltip] = useState<string>("");
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    setIsDark(detectDark());

    // Watch for Once UI theme attribute changes
    const observer = new MutationObserver(() => setIsDark(detectDark()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });

    // Also watch OS-level preference
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onMqChange = () => setIsDark(detectDark());
    mq.addEventListener("change", onMqChange);

    return () => {
      observer.disconnect();
      mq.removeEventListener("change", onMqChange);
    };
  }, []);

  const p = isDark ? DARK_PALETTE : LIGHT_PALETTE;

  const handleEnter = useCallback((geoId: number) => {
    const name = VISITED[geoId];
    if (name) setTooltip(name);
  }, []);

  const handleLeave = useCallback(() => setTooltip(""), []);

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "24px" }}>

      {/* Stats row */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
        <div style={statBadgeStyle("accent", isDark)}>
          <span style={{ fontSize: "22px", fontWeight: 700 }}>31</span>
          <span style={{ fontSize: "12px", opacity: 0.8 }}>countries & territories</span>
        </div>
        {REGIONS.map((r) => (
          <div key={r.label} style={statBadgeStyle("neutral", isDark)}>
            <span style={{ fontSize: "16px" }}>{r.emoji}</span>
            <span style={{ fontSize: "14px", fontWeight: 600 }}>{r.count}</span>
            <span style={{ fontSize: "11px", opacity: 0.7 }}>{r.label}</span>
          </div>
        ))}
      </div>

      {/* Map */}
      <div style={{ position: "relative", width: "100%", borderRadius: "12px", overflow: "hidden" }}>
        <ComposableMap
          projection="geoNaturalEarth1"
          projectionConfig={{ scale: 153, center: [15, 0] }}
          style={{ width: "100%", height: "auto", display: "block" }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo: any) => {
                const id = parseInt(String(geo.id), 10);
                const isVisited = VISITED_IDS.has(id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => handleEnter(id)}
                    onMouseLeave={handleLeave}
                    style={{
                      default: {
                        fill: isVisited ? p.visited : p.unvisited,
                        stroke: p.stroke,
                        strokeWidth: 0.4,
                        outline: "none",
                        transition: "fill 0.15s ease",
                      },
                      hover: {
                        fill: isVisited ? p.visitedHover : p.unvisitedHover,
                        stroke: p.stroke,
                        strokeWidth: 0.4,
                        outline: "none",
                        cursor: isVisited ? "pointer" : "default",
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {/* Current location — Las Vegas */}
          <Marker coordinates={LAS_VEGAS}>
            <circle r={5} fill={p.pin} stroke={p.stroke} strokeWidth={2} />
            <circle r={9} fill="none" stroke={p.pin} strokeWidth={1.5} opacity={0.5} />
            <text
              textAnchor="middle"
              y={-13}
              style={{
                fontSize: "9px",
                fill: p.pin,
                fontWeight: 700,
                fontFamily: "inherit",
                pointerEvents: "none",
              }}
            >
              Las Vegas
            </text>
          </Marker>
        </ComposableMap>

        {/* Hover tooltip */}
        {tooltip && (
          <div
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              padding: "6px 14px",
              background: p.legendBg,
              border: `1px solid ${p.legendBorder}`,
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 500,
              color: p.legendText,
              pointerEvents: "none",
              backdropFilter: "blur(8px)",
              whiteSpace: "nowrap",
            }}
          >
            {tooltip}
          </div>
        )}

        {/* Legend */}
        <div
          style={{
            position: "absolute",
            bottom: 12,
            right: 12,
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            padding: "8px 12px",
            background: p.legendBg,
            border: `1px solid ${p.legendBorder}`,
            borderRadius: "8px",
            backdropFilter: "blur(8px)",
            fontSize: "12px",
            color: p.legendText,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: 12, height: 12, borderRadius: 3, background: p.visited }} />
            <span>Visited</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: 12, height: 12, borderRadius: 3, background: p.unvisited, border: `1px solid ${p.legendBorder}` }} />
            <span>Not yet</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 12, height: 12 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: p.pin }} />
            </div>
            <span>Currently here</span>
          </div>
        </div>
      </div>

      {/* Country list */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "8px",
          paddingTop: "8px",
        }}
      >
        {Object.values(VISITED).map((name) => (
          <div
            key={name}
            style={{
              padding: "6px 12px",
              borderRadius: "6px",
              fontSize: "13px",
              background: "var(--neutral-alpha-weak)",
              color: "var(--neutral-on-background-strong, #f9fafb)",
              border: "1px solid var(--neutral-alpha-medium)",
            }}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

function statBadgeStyle(variant: "accent" | "neutral", isDark: boolean): React.CSSProperties {
  const isAccent = variant === "accent";
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 18px",
    borderRadius: "10px",
    background: isAccent
      ? isDark ? "rgba(220,38,38,0.15)" : "rgba(14,116,144,0.1)"
      : isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
    border: isAccent
      ? isDark ? "1px solid rgba(248,113,113,0.35)" : "1px solid rgba(14,116,144,0.3)"
      : isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
    color: isAccent
      ? isDark ? "#f87171" : "#0e7490"
      : isDark ? "#e2e8f0" : "#1e293b",
    minWidth: "80px",
    gap: "2px",
  };
}

import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import "./OpenSource.css";
import { useTheme } from "../../hooks/useTheme";

const CALENDAR_THEME = {
  dark: [
    "oklch(0.205 0.014 162)",
    "oklch(0.52 0.10 156)",
    "oklch(0.65 0.13 156)",
    "oklch(0.76 0.16 156)",
    "oklch(0.86 0.17 156)",
  ],
  light: [
    "oklch(0.88 0.012 155)",
    "oklch(0.72 0.10 156)",
    "oklch(0.63 0.13 156)",
    "oklch(0.56 0.15 156)",
    "oklch(0.44 0.14 156)",
  ],
};

export default function OpenSource() {
  const { theme } = useTheme();

  return (
    <section id="open-source" className="section">
      <div className="container">
        <div className="section__header">
          <div className="section__meta">
            <span className="section__num">04</span>
            <span className="section__title">open source</span>
          </div>
          <a
            href="https://github.com/airton-canale"
            target="_blank"
            rel="noreferrer"
            className="opensource__gh-link"
          >
            github.com/airton-canale ↗
          </a>
        </div>

        <div className="opensource__calendar">
          <GitHubCalendar
            username="airton-canale"
            colorScheme={theme}
            theme={CALENDAR_THEME}
            fontSize={12}
            blockSize={13}
            blockMargin={4}
            renderBlock={(block, activity) =>
              React.cloneElement(block, {
                "data-tooltip-id": "calendar-tooltip",
                "data-tooltip-content": `${activity.count} contributions on ${activity.date}`,
              })
            }
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";

type CountdownTimerProps = {
  targetDate: string;
  labels: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  completeLabel: string;
};

function getTimeLeft(targetDate: string) {
  const now = new Date().getTime();
  const target = new Date(targetDate).getTime();
  const difference = target - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isComplete: true,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isComplete: false,
  };
}

export function CountdownTimer({
  targetDate,
  labels,
  completeLabel,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [targetDate]);

  const items = useMemo(
    () => [
      { label: labels.days, value: timeLeft.days },
      { label: labels.hours, value: timeLeft.hours },
      { label: labels.minutes, value: timeLeft.minutes },
      { label: labels.seconds, value: timeLeft.seconds },
    ],
    [
      labels.days,
      labels.hours,
      labels.minutes,
      labels.seconds,
      timeLeft.days,
      timeLeft.hours,
      timeLeft.minutes,
      timeLeft.seconds,
    ],
  );

  if (timeLeft.isComplete) {
    return (
      <div className="rounded-[2rem] border border-white/80 bg-white/75 px-6 py-8 text-center shadow-[0_24px_80px_rgba(102,33,54,0.1)] backdrop-blur">
        <p className="font-display text-4xl leading-none text-[#5b2233]">
          {completeLabel}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-[2rem] border border-white/80 bg-white/75 px-4 py-7 text-center shadow-[0_24px_80px_rgba(102,33,54,0.1)] backdrop-blur"
        >
          <div className="font-display text-[6.25rem] leading-none text-[#5b2233]">
            {String(item.value).padStart(2, "0")}
          </div>
          <div className="tracking-ui mt-3 text-sm uppercase text-[#b07c8b]">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

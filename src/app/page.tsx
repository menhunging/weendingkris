import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { CountdownTimer } from "@/components/countdown-timer";
import { SectionReveal } from "@/components/section-reveal";
import { SoundToggle } from "@/components/sound-toggle";
import { weddingConfig } from "@/config/wedding";

function HeartDivider() {
  return (
    <div className="px-4 py-2">
      <SectionReveal className="mx-auto flex w-full max-w-[600px] justify-center">
        <div className="flex w-full max-w-[14rem] items-center justify-center gap-4 text-[#b77a8d]">
          <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent_0%,rgba(183,122,141,0.55)_100%)]" />
          <span className="text-[1.5rem] leading-none">♡</span>
          <span className="h-px flex-1 bg-[linear-gradient(90deg,rgba(183,122,141,0.55)_0%,transparent_100%)]" />
        </div>
      </SectionReveal>
    </div>
  );
}

export default function Home() {
  const {
    couple,
    countdown,
    dressCode,
    event,
    footer,
    gallery,
    hero,
    map,
    schedule,
    scheduleSection,
    wishes,
  } = weddingConfig;

  const eventDate = new Date(event.date);
  const calendarMonth = new Intl.DateTimeFormat("ru-RU", {
    month: "long",
  }).format(eventDate);
  const calendarYear = new Intl.DateTimeFormat("ru-RU", {
    year: "numeric",
  }).format(eventDate);
  const calendarMonthTitle =
    calendarMonth.charAt(0).toUpperCase() + calendarMonth.slice(1);
  const eventDayNumber = Number(
    new Intl.DateTimeFormat("ru-RU", { day: "numeric" }).format(eventDate),
  );
  const firstDayOfMonth = new Date(
    eventDate.getFullYear(),
    eventDate.getMonth(),
    1,
  );
  const leadingEmptyDays = (firstDayOfMonth.getDay() + 6) % 7;
  const daysInMonth = new Date(
    eventDate.getFullYear(),
    eventDate.getMonth() + 1,
    0,
  ).getDate();
  const calendarCells = [
    ...Array.from({ length: leadingEmptyDays }, () => null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ];
  const weekdayLabels = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const floatingHearts = Array.from({ length: 28 }, (_, index) => {
    const row = Math.floor(index / 7);
    const col = index % 7;

    return {
      left: `${5 + col * 14 + (row % 2) * 3}%`,
      delay: `${(index * 0.45) % 4.5}s`,
      duration: `${6.6 + (index % 5) * 0.55}s`,
      opacity: 0.2 + (index % 4) * 0.05,
      drift: `${index % 2 === 0 ? "-" : ""}${10 + (index % 5) * 4}px`,
      fontSize: `${1.15 + (index % 4) * 0.35}rem`,
    };
  });

  return (
    <main className="relative overflow-hidden text-[18.5px] leading-[1.6]">
      <SoundToggle />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top,_rgba(237,225,232,0.75),_transparent_58%)]" />
      <div className="pointer-events-none absolute right-[-8rem] top-[28rem] -z-10 h-72 w-72 rounded-full bg-[#f2dbe2]/75 blur-3xl" />
      <div className="pointer-events-none absolute left-[-6rem] top-[76rem] -z-10 h-80 w-80 rounded-full bg-[#f8e9ed] blur-3xl" />

      <section className="px-4 pb-8 pt-4">
        <div className="mx-auto w-full max-w-[600px]">
          <div className="rounded-[2.5rem] border border-white/80 bg-[#fffafb] p-5 shadow-[0_40px_120px_rgba(102,33,54,0.12)]">
            <SectionReveal className="text-center">
              <h1 className="mt-5 font-display text-[3.6rem] leading-none text-[#5b2233]">
                Wedding Day
              </h1>
            </SectionReveal>

            <SectionReveal className="relative mt-8 h-[45rem]" delay={0.1}>
              <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                {floatingHearts.map((heart, index) => (
                  <span
                    key={`${heart.left}-${index}`}
                    className="floating-heart absolute bottom-[-2rem] leading-none text-[#b35f79]"
                    style={
                      {
                        left: heart.left,
                        fontSize: heart.fontSize,
                        animationDelay: heart.delay,
                        ["--heart-duration" as "--heart-duration"]:
                          heart.duration,
                        ["--heart-opacity" as "--heart-opacity"]: String(
                          heart.opacity,
                        ),
                        ["--heart-drift-x" as "--heart-drift-x"]: heart.drift,
                      } as CSSProperties
                    }
                  >
                    ♥
                  </span>
                ))}
              </div>
              {hero.cards.map((card, index) => (
                <div
                  key={card.name}
                  className={`absolute w-[60%] max-w-[16.5rem] rounded-[1rem] bg-[#fffafb] p-3 pb-6 shadow-[0_24px_60px_rgba(102,33,54,0.14)] ${
                    index === 0
                      ? "left-[33%] top-0 z-20 -translate-x-1/2 rotate-[-4deg]"
                      : "left-[67%] top-[22.5rem] z-10 -translate-x-1/2 rotate-[4deg]"
                  }`}
                >
                  <div className="pointer-events-none absolute left-4 top-3 h-6 w-12 rotate-[-8deg] rounded-sm bg-[#f2dde4]/95 shadow-sm" />
                  <div className="pointer-events-none absolute right-4 top-3 h-6 w-12 rotate-[10deg] rounded-sm bg-[#f2dde4]/95 shadow-sm" />
                  <div className="overflow-hidden border border-[#edd8de] bg-white p-2 pb-5">
                    <div className="relative aspect-[0.8/1] overflow-hidden bg-[#f5e6eb]">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 600px) 64vw, 272px"
                        className="object-cover sepia-[0.18] contrast-[0.92] saturate-[0.85]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,252,250,0.08),rgba(120,106,116,0.1))]" />
                    </div>
                  </div>
                  <div className="px-3 pt-4 text-center">
                    <p className="font-display text-4xl leading-none text-[#5b2233]">
                      {card.name}
                    </p>
                  </div>
                </div>
              ))}
            </SectionReveal>

            <SectionReveal className="mt-8 text-center" delay={0.12}>
              <h2 className="font-display text-[3rem] leading-none text-[#5b2233]">
                {hero.descTitle}
              </h2>

              <p className="mx-auto mt-5 max-w-[28rem] text-center text-[1.38rem] leading-[1.68] text-[#8b5f6d]">
                Да-да, это мы - Юра и Кристина!
                <br />
                И мы хотим сообщить вам радостную новость - МЫ ЖЕНИМСЯ! <br />
                Мы приглашаем вас на нашу свадьбу! <br />
                Будем рады, если вы проведете этот счастливый день вместе с
                нами!
              </p>
            </SectionReveal>

            <SectionReveal
              className="mt-8 rounded-[2rem] border border-[#edd8de] bg-[#fbf1f4] p-5 text-center"
              delay={0.15}
            >
              <div>
                <div className="w-full overflow-hidden rounded-[1.75rem] border border-[#edd8de] bg-white shadow-[0_16px_40px_rgba(102,33,54,0.08)]">
                  <div className="flex items-end justify-between gap-4 bg-[#9e4a61] px-4 py-3 text-white">
                    <p className="font-display text-[3rem] leading-none">
                      {calendarMonthTitle}
                    </p>
                    <p className="font-display text-[4.4rem] leading-none">
                      {calendarYear}
                    </p>
                  </div>
                  <div className="grid grid-cols-7 gap-y-3 px-4 py-5">
                    {weekdayLabels.map((label) => (
                      <div
                        key={label}
                        className="text-center text-sm uppercase text-[#b07c8b]"
                      >
                        {label}
                      </div>
                    ))}

                    {calendarCells.map((day, index) => (
                      <div
                        key={`${day ?? "empty"}-${index}`}
                        className="flex h-10 items-center justify-center"
                      >
                        {day ? (
                          day === eventDayNumber ? (
                            <div className="pulse-heart relative flex h-10 w-10 items-center justify-center text-sm text-white">
                              <span className="absolute left-1/2 top-[0.1rem] h-6 w-6 -translate-x-[85%] rounded-full bg-[#9e4a61]" />
                              <span className="absolute left-1/2 top-[0.1rem] h-6 w-6 -translate-x-[15%] rounded-full bg-[#9e4a61]" />
                              <span className="absolute left-1/2 top-[0.65rem] h-6 w-6 -translate-x-1/2 rotate-45 bg-[#9e4a61]" />
                              <span className="relative z-10">{day}</span>
                            </div>
                          ) : (
                            <span className="text-[1.05rem] text-[#5b2233]">
                              {day}
                            </span>
                          )
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <HeartDivider />

      <section className="px-4 py-8">
        <SectionReveal className="mx-auto w-full max-w-[600px] rounded-[2.5rem] border border-white/80 bg-white/70 p-6 shadow-[0_30px_100px_rgba(102,33,54,0.08)] backdrop-blur">
          <div className="mx-auto max-w-[30rem] text-center">
            <p className="tracking-ui text-sm uppercase text-[#b07c8b]">
              {countdown.title}
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="pulse-heart relative h-7 w-7 shrink-0">
                <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-[85%] rounded-full bg-[#9e4a61]" />
                <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-[15%] rounded-full bg-[#9e4a61]" />
                <span className="absolute left-1/2 top-[0.42rem] h-4 w-4 -translate-x-1/2 rotate-45 bg-[#9e4a61]" />
              </div>
              <div className="relative inline-block pb-3">
                <p className="font-display text-[3.8rem] leading-none text-[#5b2233]">
                  {event.dayLabel}
                </p>
                <span className="absolute bottom-0 left-1/2 h-[2px] w-[88%] -translate-x-1/2 rounded-full bg-[#9e4a61]" />
              </div>
              <div className="pulse-heart relative h-7 w-7 shrink-0">
                <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-[85%] rounded-full bg-[#9e4a61]" />
                <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-[15%] rounded-full bg-[#9e4a61]" />
                <span className="absolute left-1/2 top-[0.42rem] h-4 w-4 -translate-x-1/2 rotate-45 bg-[#9e4a61]" />
              </div>
            </div>
            <p className="mt-4 text-[1.28rem] leading-[1.68] text-[#8b5f6d]">
              {countdown.description}
            </p>
          </div>
          <div className="mt-8">
            <CountdownTimer
              targetDate={event.date}
              labels={countdown.labels}
              completeLabel={countdown.completeLabel}
            />
          </div>
        </SectionReveal>
      </section>

      <HeartDivider />

      <section className="px-4 py-8">
        <div className="mx-auto grid w-full max-w-[600px] gap-8">
          <SectionReveal className="grid gap-8" delay={0.1}>
            <div className="overflow-hidden rounded-[2.5rem] border border-[#edd8de] bg-[#fffafb] shadow-[0_30px_100px_rgba(102,33,54,0.06)]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/mesto.webp"
                  alt={map.title}
                  fill
                  sizes="(max-width: 600px) 100vw, 600px"
                  className="location-photo-breathe object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(91,34,51,0)_35%,rgba(91,34,51,0.52)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="tracking-ui text-sm uppercase text-white/75">
                    {map.title}
                  </p>
                  <h2 className="mt-3 font-display text-[3.1rem] leading-none">
                    {event.venue}
                  </h2>
                </div>
              </div>

              <div className="grid gap-5 p-6">
                <div className="grid gap-3">
                  <div className="flex justify-start">
                    <div className="relative max-w-[88%] rounded-[1.5rem] rounded-bl-[0.45rem] border border-[#edd8de] bg-[#fbf1f4] px-5 py-4 shadow-[0_12px_30px_rgba(102,33,54,0.06)]">
                      <p className="tracking-ui text-xs uppercase text-[#b07c8b]">
                        {map.labels.address}
                      </p>
                      <p className="mt-3 text-[1.18rem] leading-[1.6] text-[#5b2233]">
                        {map.addressText}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="relative max-w-[84%] rounded-[1.5rem] rounded-br-[0.45rem] border border-[#edd8de] bg-white/90 px-5 py-4 shadow-[0_12px_30px_rgba(102,33,54,0.06)]">
                      <p className="text-[1.08rem] leading-[1.68] text-[#8b5f6d]">
                        {map.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-1">
                  <Link
                    href={map.googleMaps}
                    target="_blank"
                    className="rounded-full bg-[#8b3951] px-5 py-4 text-center text-[0.78rem] uppercase tracking-[0.22em] text-white transition hover:bg-[#74283f]"
                  >
                    {map.labels.google}
                  </Link>
                  <Link
                    href={map.yandexMaps}
                    target="_blank"
                    className="rounded-full border border-[#d8bcc6] px-5 py-4 text-center text-[0.78rem] uppercase tracking-[0.22em] text-[#5b2233] transition hover:bg-[#faeef2]"
                  >
                    {map.labels.yandex}
                  </Link>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <HeartDivider />

      <section className="px-4 py-8">
        <SectionReveal className="mx-auto w-full max-w-[600px] rounded-[2.5rem] border border-[#edd8de] bg-[#fffafb] p-6 shadow-[0_30px_100px_rgba(102,33,54,0.06)]">
          <div className="max-w-[30rem]" style={{ textAlign: "center" }}>
            <h2 className="font-display text-[3.8rem] leading-none text-[#5b2233] ">
              {scheduleSection.title}
            </h2>
            <p className="mt-4 text-[1.28rem] leading-[1.72] text-[#8b5f6d]">
              {scheduleSection.description}
            </p>
          </div>

          <div className="relative mt-10">
            <div className="absolute bottom-0 left-[0.95rem] top-0 w-[3px] -translate-x-1/2 rounded-full bg-[#d9bcc6]" />
            <div className="grid gap-8">
              {schedule.map((item) => (
                <div
                  key={`${item.time}-${item.title}`}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-0 h-8 w-8 rounded-full border-[6px] border-[#fffafb] bg-[#9e4a61] shadow-[0_8px_18px_rgba(157,75,99,0.22)]" />
                  <div className="flex min-h-8 items-center">
                    <p className="tracking-ui text-sm uppercase leading-none text-[#b07c8b]">
                      {item.time}
                    </p>
                  </div>
                  <h3 className="mt-3 font-display text-[3.1rem] leading-none text-[#5b2233]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[28rem] text-[1.28rem] leading-[1.72] text-[#8b5f6d]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>

      <HeartDivider />

      <section className="px-4 py-8" style={{ textAlign: "center" }}>
        <SectionReveal className="mx-auto w-full max-w-[600px] rounded-[2.5rem] border border-[#edd8de] bg-[#fffafb] p-6 shadow-[0_30px_100px_rgba(102,33,54,0.06)]">
          <div className="mx-auto max-w-[30rem]">
            <h2 className="mt-4 font-display text-[3.8rem] leading-none text-[#5b2233]">
              {wishes.title}
            </h2>
            <p className="mt-6 text-[1.28rem] leading-[1.72] text-[#8b5f6d]">
              Приятном комплиментом для нас будет, если вместо букетов цветов Вы
              решите подарить нам{" "}
              <strong>бутылочку алкогольного напитка</strong> и{" "}
              <strong>один цветок</strong> 🌸 с которым у вас ассоциируемся мы. <br/>
              Из них мы соберём особенный букет, наполненный смыслом и вашими
              чувствами.
            </p>
          </div>
        </SectionReveal>
      </section>

      <HeartDivider />

      <section className="px-4 py-8" style={{ textAlign: "center" }}>
        <SectionReveal className="mx-auto w-full max-w-[600px] rounded-[2.5rem] border border-[#edd8de] bg-[#fffafb] p-6 shadow-[0_30px_100px_rgba(102,33,54,0.06)]">
          <div className="max-w-[30rem]">
            <h2 className="font-display text-[3.8rem] leading-none text-[#5b2233]">
              {dressCode.title}
            </h2>
            <p className="mt-4 text-[1.28rem] leading-[1.72] text-[#8b5f6d]">
              Мы будем очень рады, если вы поддержите атмосферу нашего праздника
              своим образом. 🤍 <br /> Будем признательны, если вы отдадите
              предпочтение сдержанному стилю и спокойным тонам. <br />
              Безупречный черный или лаконичные приглушенные оттенки станут
              лучшим выбором для этого случая.
            </p>
          </div>
        </SectionReveal>
      </section>

      <HeartDivider />

      <section className="px-4 py-8">
        <div className="mx-auto grid w-full max-w-[600px] gap-8">
          <SectionReveal className="rounded-[2.75rem] border border-[#edd8de] bg-[linear-gradient(180deg,#fffafb_0%,#f9eef2_100%)] p-4 shadow-[0_30px_100px_rgba(102,33,54,0.06)]">
            <div className="text-center">
              <p className="tracking-ui text-sm uppercase text-[#b07c8b]">
                С любовью
              </p>
              <h2 className="mt-4 font-display text-[3.8rem] leading-none text-[#5b2233]">
                Юрий и Кристина
              </h2>
            </div>

            <div className="relative mt-10 px-2 pb-2 pt-4">
              <div className="pointer-events-none absolute left-1/2 top-10 h-56 w-56 -translate-x-1/2 rounded-full bg-[#f0dde4]/75 blur-3xl" />
              <div className="pointer-events-none absolute left-8 top-0 h-10 w-20 rotate-[-8deg] rounded-md bg-[#f0dde4]/95 shadow-sm" />
              <div className="pointer-events-none absolute right-8 top-1 h-10 w-20 rotate-[9deg] rounded-md bg-[#f0dde4]/95 shadow-sm" />

              <div className="relative rounded-[2rem] bg-white p-3 pb-6 shadow-[0_30px_90px_rgba(102,33,54,0.12)]">
                <div className="relative overflow-hidden rounded-[1.5rem] aspect-[3/4]">
                  <Image
                    src={gallery.images[0].src}
                    alt={gallery.images[0].alt}
                    fill
                    sizes="(max-width: 600px) 100vw, 600px"
                    className="location-photo-breathe object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(91,34,51,0.16))]" />
                </div>

                <div className="px-3 pt-5 text-center">
                  <p className="mt-4 mb-4 tracking-ui text-sm uppercase text-[#b07c8b]">
                    Наши контакты
                  </p>
                  <div className="grid gap-4 border-t border-[#edd8de] pt-5 text-left">
                    {gallery.phones.map((person) => (
                      <div
                        key={person.label}
                        className="flex items-start justify-between gap-4 rounded-[1.25rem] bg-[#fbf1f4] px-4 py-3"
                      >
                        <div>
                          <p className="tracking-ui text-[0.72rem] uppercase text-[#b07c8b]">
                            {person.label}
                          </p>
                          <p className="mt-2 font-display text-[2rem] leading-none text-[#5b2233]">
                            {person.name}
                          </p>
                        </div>
                        <Link
                          href={`tel:${person.phone.replace(/[^+\d]/g, "")}`}
                          className="text-right text-[0.98rem] font-semibold leading-[1.4] text-[#8b3951]"
                        >
                          {person.phone}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}

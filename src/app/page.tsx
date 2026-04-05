import Image from "next/image";
import Link from "next/link";

import { CountdownTimer } from "@/components/countdown-timer";
import { SectionReveal } from "@/components/section-reveal";
import { weddingConfig } from "@/config/wedding";

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

  return (
    <main className="relative overflow-hidden text-[18.5px] leading-[1.6]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top,_rgba(237,225,232,0.75),_transparent_58%)]" />
      <div className="pointer-events-none absolute right-[-8rem] top-[28rem] -z-10 h-72 w-72 rounded-full bg-[#f3edf4]/70 blur-3xl" />
      <div className="pointer-events-none absolute left-[-6rem] top-[76rem] -z-10 h-80 w-80 rounded-full bg-[#f7f2f5] blur-3xl" />

      <section className="px-4 pb-8 pt-4">
        <div className="mx-auto w-full max-w-[600px]">
          <div className="rounded-[2.5rem] border border-white/80 bg-[#fffefd] p-5 shadow-[0_40px_120px_rgba(134,118,128,0.12)]">
            <SectionReveal className="text-center">
              <h1 className="mt-5 font-display text-[3.6rem] leading-none text-[#5f5760]">
                Wedding Day
              </h1>
            </SectionReveal>

            <SectionReveal className="relative mt-8 h-[30rem]" delay={0.1}>
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
                <div className="pulse-heart relative flex h-20 w-20 items-center justify-center">
                  <span className="absolute left-1/2 top-2 h-11 w-11 -translate-x-[85%] rounded-full bg-[#d9c6cd] shadow-[0_10px_24px_rgba(178,159,169,0.28)]" />
                  <span className="absolute left-1/2 top-2 h-11 w-11 -translate-x-[15%] rounded-full bg-[#d9c6cd] shadow-[0_10px_24px_rgba(178,159,169,0.28)]" />
                  <span className="absolute left-1/2 top-[1.45rem] h-11 w-11 -translate-x-1/2 rotate-45 bg-[#d9c6cd] shadow-[0_10px_24px_rgba(178,159,169,0.28)]" />
                </div>
              </div>
              {hero.cards.map((card, index) => (
                <div
                  key={card.name}
                  className={`absolute w-[64%] max-w-[17rem] rounded-[1rem] bg-[#fffefd] p-3 pb-6 shadow-[0_24px_60px_rgba(134,118,128,0.14)] ${
                    index === 0
                      ? "left-2 top-0 z-10 rotate-[-5deg]"
                      : "bottom-0 right-2 z-20 rotate-[6deg]"
                  }`}
                >
                  <div className="pointer-events-none absolute left-4 top-3 h-6 w-12 rotate-[-8deg] rounded-sm bg-[#f1e8eb]/95 shadow-sm" />
                  <div className="pointer-events-none absolute right-4 top-3 h-6 w-12 rotate-[10deg] rounded-sm bg-[#f1e8eb]/95 shadow-sm" />
                  <div className="overflow-hidden border border-[#ece4e7] bg-white p-2 pb-5">
                    <div className="relative aspect-[0.8/1] overflow-hidden bg-[#f2ecef]">
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
                    <p className="font-display text-4xl leading-none text-[#5f5760]">
                      {card.name}
                    </p>
                  </div>
                </div>
              ))}
            </SectionReveal>

            <SectionReveal className="mt-8 text-center" delay={0.12}>
              <h2 className="font-display text-[3rem] leading-none text-[#5f5760]">
                {hero.descTitle}
              </h2>

              <p className="mx-auto mt-5 max-w-[28rem] text-center text-[1.38rem] leading-[1.68] text-[#8d8189]">
                Да-да, это мы - Юра и Кристина!
                <br />
                И мы хотим сообщить вам радостную новость - МЫ ЖЕНИМСЯ! <br />
                Мы приглашаем вас на нашу свадьбу! <br />
                Будем рады, если вы проведете этот счастливый день вместе с
                нами!
              </p>
            </SectionReveal>

            <SectionReveal
              className="mt-8 rounded-[2rem] border border-[#ece4e7] bg-[#faf5f7] p-5 text-center"
              delay={0.15}
            >
              <div>
                <div className="w-full overflow-hidden rounded-[1.75rem] border border-[#ece4e7] bg-white shadow-[0_16px_40px_rgba(134,118,128,0.08)]">
                  <div className="flex items-end justify-between gap-4 bg-[#d9c6cd] px-4 py-3 text-white">
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
                        className="text-center text-sm uppercase text-[#ab9ba3]"
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
                              <span className="absolute left-1/2 top-[0.1rem] h-6 w-6 -translate-x-[85%] rounded-full bg-[#d9c6cd]" />
                              <span className="absolute left-1/2 top-[0.1rem] h-6 w-6 -translate-x-[15%] rounded-full bg-[#d9c6cd]" />
                              <span className="absolute left-1/2 top-[0.65rem] h-6 w-6 -translate-x-1/2 rotate-45 bg-[#d9c6cd]" />
                              <span className="relative z-10">{day}</span>
                            </div>
                          ) : (
                            <span className="text-[1.05rem] text-[#5f5760]">
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

      <section className="px-4 py-8">
        <SectionReveal className="mx-auto w-full max-w-[600px] rounded-[2.5rem] border border-white/80 bg-white/70 p-6 shadow-[0_30px_100px_rgba(134,118,128,0.08)] backdrop-blur">
          <div className="mx-auto max-w-[30rem] text-center">
            <p className="tracking-ui text-sm uppercase text-[#ab9ba3]">
              {countdown.title}
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="pulse-heart relative h-7 w-7 shrink-0">
                <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-[85%] rounded-full bg-[#d9c6cd]" />
                <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-[15%] rounded-full bg-[#d9c6cd]" />
                <span className="absolute left-1/2 top-[0.42rem] h-4 w-4 -translate-x-1/2 rotate-45 bg-[#d9c6cd]" />
              </div>
              <div className="relative inline-block pb-3">
                <p className="font-display text-[3.8rem] leading-none text-[#5f5760]">
                  {event.dayLabel}
                </p>
                <span className="absolute bottom-0 left-1/2 h-[2px] w-[88%] -translate-x-1/2 rounded-full bg-[#d9c6cd]" />
              </div>
              <div className="pulse-heart relative h-7 w-7 shrink-0">
                <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-[85%] rounded-full bg-[#d9c6cd]" />
                <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-[15%] rounded-full bg-[#d9c6cd]" />
                <span className="absolute left-1/2 top-[0.42rem] h-4 w-4 -translate-x-1/2 rotate-45 bg-[#d9c6cd]" />
              </div>
            </div>
            <p className="mt-4 text-[1.28rem] leading-[1.68] text-[#8d8189]">
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

      <section className="px-4 py-8">
        <div className="mx-auto grid w-full max-w-[600px] gap-8">
          <SectionReveal className="grid gap-8" delay={0.1}>
            <div className="overflow-hidden rounded-[2.5rem] border border-[#ece4e7] bg-[#fffefd] shadow-[0_30px_100px_rgba(134,118,128,0.06)]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/mesto.webp"
                  alt={map.title}
                  fill
                  sizes="(max-width: 600px) 100vw, 600px"
                  className="location-photo-breathe object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(95,87,96,0)_35%,rgba(95,87,96,0.45)_100%)]" />
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
                    <div className="relative max-w-[88%] rounded-[1.5rem] rounded-bl-[0.45rem] border border-[#ece4e7] bg-[#faf5f7] px-5 py-4 shadow-[0_12px_30px_rgba(134,118,128,0.06)]">
                      <p className="tracking-ui text-xs uppercase text-[#ab9ba3]">
                        {map.labels.address}
                      </p>
                      <p className="mt-3 text-[1.18rem] leading-[1.6] text-[#5f5760]">
                        {map.addressText}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="relative max-w-[84%] rounded-[1.5rem] rounded-br-[0.45rem] border border-[#ece4e7] bg-white/90 px-5 py-4 shadow-[0_12px_30px_rgba(134,118,128,0.06)]">
                      <p className="text-[1.08rem] leading-[1.68] text-[#8d8189]">
                        {map.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-1">
                  <Link
                    href={map.googleMaps}
                    target="_blank"
                    className="tracking-ui rounded-full bg-[#8f7e87] px-5 py-4 text-center text-base uppercase text-white transition hover:bg-[#7f6f77]"
                  >
                    {map.labels.google}
                  </Link>
                  <Link
                    href={map.yandexMaps}
                    target="_blank"
                    className="tracking-ui rounded-full border border-[#ddd1d6] px-5 py-4 text-center text-base uppercase text-[#5f5760] transition hover:bg-[#f7f1f4]"
                  >
                    {map.labels.yandex}
                  </Link>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="px-4 py-8">
        <SectionReveal className="mx-auto w-full max-w-[600px] rounded-[2.5rem] border border-[#ece4e7] bg-[#fffefd] p-6 shadow-[0_30px_100px_rgba(134,118,128,0.06)]">
          <div className="max-w-[30rem]">
            <p className="tracking-ui text-sm uppercase text-[#ab9ba3]">
              {event.venue}
            </p>
            <h2 className="mt-4 font-display text-[3.8rem] leading-none text-[#5f5760]">
              {scheduleSection.title}
            </h2>
            <p className="mt-4 text-[1.28rem] leading-[1.72] text-[#8d8189]">
              {scheduleSection.description}
            </p>
          </div>

          <div className="relative mt-10">
            <div className="absolute bottom-0 left-[0.95rem] top-0 w-[3px] -translate-x-1/2 rounded-full bg-[#e4d8dd]" />
            <div className="grid gap-8">
              {schedule.map((item) => (
                <div key={`${item.time}-${item.title}`} className="relative pl-12">
                  <div className="absolute left-0 top-0 h-8 w-8 rounded-full border-[6px] border-[#fffefd] bg-[#d9c6cd] shadow-[0_8px_18px_rgba(178,159,169,0.18)]" />
                  <div className="flex min-h-8 items-center">
                    <p className="tracking-ui text-sm uppercase leading-none text-[#ab9ba3]">
                      {item.time}
                    </p>
                  </div>
                  <h3 className="mt-3 font-display text-[3.1rem] leading-none text-[#5f5760]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[28rem] text-[1.28rem] leading-[1.72] text-[#8d8189]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>

      <section className="px-4 py-8">
        <SectionReveal className="mx-auto grid w-full max-w-[600px] gap-10">
          <div className="max-w-[30rem]">
            <p className="tracking-ui text-sm uppercase text-[#ab9ba3]">
              {wishes.title}
            </p>
            <h2 className="mt-4 font-display text-[3.8rem] leading-none text-[#5f5760]">
              {couple.displayNames}
            </h2>
            <p className="mt-6 text-[1.28rem] leading-[1.72] text-[#8d8189]">
              {wishes.text}
            </p>
          </div>

          <div className="grid gap-4">
            {wishes.items.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-[2rem] border border-[#ece4e7] bg-white/80 p-6 shadow-[0_24px_80px_rgba(134,118,128,0.08)] backdrop-blur ${
                  index === 1 ? "ml-4" : index === 2 ? "mr-4" : ""
                }`}
              >
                <p className="tracking-ui text-sm uppercase text-[#ab9ba3]">
                  Пожелания
                </p>
                <h3 className="mt-4 font-display text-[3rem] leading-none text-[#5f5760]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[1.22rem] leading-[1.72] text-[#8d8189]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>

      <section className="px-4 py-8">
        <SectionReveal className="mx-auto w-full max-w-[600px] rounded-[2.5rem] border border-[#ece4e7] bg-[#fffefd] p-6 shadow-[0_30px_100px_rgba(134,118,128,0.06)]">
          <div className="max-w-[30rem]">
            <p className="tracking-ui text-sm uppercase text-[#ab9ba3]">
              {dressCode.title}
            </p>
            <h2 className="mt-4 font-display text-[3.8rem] leading-none text-[#5f5760]">
              {couple.displayNames}
            </h2>
            <p className="mt-4 text-[1.28rem] leading-[1.72] text-[#8d8189]">
              {dressCode.description}
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            {[
              dressCode.women,
              dressCode.men,
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-[#ece4e7] bg-white/80 p-6 shadow-[0_24px_80px_rgba(134,118,128,0.08)] backdrop-blur"
              >
                <p className="tracking-ui text-sm uppercase text-[#ab9ba3]">
                  {item.title}
                </p>
                <p className="mt-4 text-[1.22rem] leading-[1.72] text-[#8d8189]">
                  {item.description}
                </p>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {item.images.map((image) => (
                    <div
                      key={image.src}
                      className="relative overflow-hidden rounded-[1.25rem] aspect-[0.8/1] shadow-[0_10px_24px_rgba(134,118,128,0.12)]"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 600px) 28vw, 160px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>

      <section className="px-4 py-8">
        <div className="mx-auto grid w-full max-w-[600px] gap-8">
          <SectionReveal className="rounded-[2.75rem] border border-[#ece4e7] bg-[linear-gradient(180deg,#fffefd_0%,#fbf7f8_100%)] p-6 shadow-[0_30px_100px_rgba(134,118,128,0.06)]">
            <div className="text-center">
              <p className="tracking-ui text-sm uppercase text-[#ab9ba3]">
                {gallery.title}
              </p>
              <h2 className="mt-4 font-display text-[3.8rem] leading-none text-[#5f5760]">
                {couple.displayNames}
              </h2>
            </div>

            <div className="relative mt-10 px-2 pb-2 pt-4">
              <div className="pointer-events-none absolute left-1/2 top-10 h-56 w-56 -translate-x-1/2 rounded-full bg-[#efe4e8]/70 blur-3xl" />
              <div className="pointer-events-none absolute left-8 top-0 h-10 w-20 rotate-[-8deg] rounded-md bg-[#efe4e8]/95 shadow-sm" />
              <div className="pointer-events-none absolute right-8 top-1 h-10 w-20 rotate-[9deg] rounded-md bg-[#efe4e8]/95 shadow-sm" />

              <div className="relative rounded-[2rem] bg-white p-3 pb-6 shadow-[0_30px_90px_rgba(134,118,128,0.12)]">
                <div className="relative overflow-hidden rounded-[1.5rem] aspect-[3/4]">
                  <Image
                    src={gallery.images[0].src}
                    alt={gallery.images[0].alt}
                    fill
                    sizes="(max-width: 600px) 100vw, 600px"
                    className="location-photo-breathe object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(95,87,96,0.12))]" />
                </div>

                <div className="px-3 pt-5 text-center">
                  <div className="grid gap-4 border-t border-[#ece4e7] pt-5 text-left">
                    {gallery.phones.map((person) => (
                      <div
                        key={person.label}
                        className="flex items-start justify-between gap-4"
                      >
                        <div>
                          <p className="tracking-ui text-[0.72rem] uppercase text-[#ab9ba3]">
                            {person.label}
                          </p>
                          <p className="mt-2 font-display text-[2rem] leading-none text-[#5f5760]">
                            {person.name}
                          </p>
                        </div>
                        <Link
                          href={`tel:${person.phone.replace(/[^+\d]/g, "")}`}
                          className="text-right text-[1.35rem] font-semibold leading-[1.35] text-[#7f6f77]"
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

      <footer className="px-4 pb-14 pt-8 text-center">
        <SectionReveal className="mx-auto w-full max-w-[600px]">
          <p className="tracking-ui text-sm uppercase text-[#ab9ba3]">
            {footer.overline}
          </p>
          <p className="mt-4 font-script text-[4.4rem] leading-none text-[#c3aab2]">
            {couple.displayNames}
          </p>
          <p className="mt-4 text-[1.28rem] leading-[1.72] text-[#8d8189]">
            {footer.note}
          </p>
        </SectionReveal>
      </footer>
    </main>
  );
}

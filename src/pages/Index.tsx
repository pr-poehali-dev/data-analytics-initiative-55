import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const PHONE = "+7 (929) 313-64-36";
const PHONE_HREF = "tel:+79293136436";

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observers: Record<string, IntersectionObserver> = {};
    const sectionIds = ["hero", "about", "how", "contact"];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      observers[id] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
            observers[id].unobserve(element);
          }
        },
        { threshold: 0.15 }
      );
      observers[id].observe(element);
    });

    return () => Object.values(observers).forEach((o) => o.disconnect());
  }, []);

  const fadeIn = (id: string, delay = 0) =>
    `transition-all duration-700 ${visibleSections[id] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-2xl border-b border-accent/20 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Music" size={22} className="text-accent" />
            <span className="font-display font-bold text-xl bg-gradient-to-r from-white via-accent to-accent/80 bg-clip-text text-transparent">
              Распределение партий
            </span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="text-muted-foreground hover:text-white transition-colors">О услуге</a>
            <a href="#how" className="text-muted-foreground hover:text-white transition-colors">Как это работает</a>
            <a href="#contact" className="text-muted-foreground hover:text-white transition-colors">Контакты</a>
          </nav>
          <a
            href={PHONE_HREF}
            className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-accent to-accent/80 text-white rounded-full hover:shadow-lg hover:shadow-accent/40 transition-all"
          >
            Позвонить
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative pt-32 pb-32 px-6 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <img src="/images/black-hole-gif.gif" alt="фон" className="w-auto h-3/4 object-contain opacity-60" />
        </div>
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-widest text-accent/80 uppercase mb-6 block">
              Профессиональная услуга
            </span>
            <h1 className="text-5xl lg:text-7xl font-display font-black leading-tight mb-6 tracking-tighter">
              <span className="bg-gradient-to-br from-white via-white to-accent/40 bg-clip-text text-transparent">
                Распределение
              </span>
              <br />
              <span className="text-accent">песен по голосам</span>
            </h1>
            <p className="text-xl text-white/75 leading-relaxed mb-10 font-light">
              Помогу грамотно распределить любую песню по голосовым партиям —
              сопрано, альт, тенор, бас. Работаю с хорами, ансамблями и
              вокальными группами любого уровня.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-white rounded-full hover:shadow-2xl hover:shadow-accent/40 transition-all font-semibold text-lg"
            >
              <Icon name="Phone" size={20} />
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* О услуге */}
      <section id="about" className="py-28 px-6 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${fadeIn("about")}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">О услуге</span>
            <h2 className="text-4xl lg:text-5xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Что я делаю
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Music",
                title: "Разбор по голосам",
                desc: "Разберу любую песню на партии: сопрано, меццо-сопрано, альт, тенор, баритон, бас — с учётом диапазона каждого голоса.",
              },
              {
                icon: "Users",
                title: "Подбор под состав",
                desc: "Адаптирую распределение под конкретный состав вашего хора или ансамбля — учту численность и возможности каждой группы.",
              },
              {
                icon: "Mic2",
                title: "Любой жанр",
                desc: "Работаю с народными песнями, классикой, эстрадой, поп-музыкой и духовными произведениями.",
              },
              {
                icon: "FileMusic",
                title: "Готовые ноты",
                desc: "Предоставлю результат в удобном формате — партитуру или отдельные партии для каждого голоса.",
              },
              {
                icon: "Sparkles",
                title: "Гармоничное звучание",
                desc: "Слежу за балансом голосов, чтобы ансамбль звучал цельно и профессионально.",
              },
              {
                icon: "Phone",
                title: "Связаться легко",
                desc: "Просто позвоните — обсудим вашу задачу, сроки и стоимость. Работаю быстро и качественно.",
                contact: PHONE,
                href: PHONE_HREF,
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`group p-8 border border-accent/10 hover:border-accent/40 rounded-2xl bg-card/50 hover:bg-card/80 transition-all duration-700 ${fadeIn("about")}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 bg-accent/10 group-hover:bg-accent/20 rounded-xl flex items-center justify-center mb-5 transition-colors">
                  <Icon name={item.icon} size={22} className="text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                {item.contact && (
                  <a
                    href={item.href}
                    className="mt-4 inline-flex items-center gap-2 text-accent font-semibold text-sm hover:text-accent/80 transition-colors"
                  >
                    <Icon name="Phone" size={14} className="text-accent" />
                    {item.contact}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Как это работает */}
      <section id="how" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${fadeIn("how")}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Процесс</span>
            <h2 className="text-4xl lg:text-5xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Как мы работаем
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Звонок", desc: "Вы звоните — обсуждаем песню, состав хора и пожелания" },
              { num: "02", title: "Материал", desc: "Присылаете ноты, аудио или текст песни, которую нужно разобрать" },
              { num: "03", title: "Работа", desc: "Разрабатываю распределение голосов с учётом диапазонов и гармонии" },
              { num: "04", title: "Результат", desc: "Получаете готовые партии в удобном формате" },
            ].map((step, i) => (
              <div
                key={i}
                className={`relative transition-all duration-700 ${fadeIn("how")}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="group bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 rounded-2xl p-8 h-full transition-all backdrop-blur-sm">
                  <div className="text-5xl font-display font-black text-accent mb-4 group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent/40 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-28 px-6 bg-accent/5">
        <div className={`max-w-2xl mx-auto text-center transition-all duration-700 ${fadeIn("contact")}`}>
          <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Контакты</span>
          <h2 className="text-4xl lg:text-5xl font-display font-black tracking-tighter mt-4 mb-6">
            <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
              Готовы начать?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 font-light">
            Позвоните — обсудим вашу задачу, стоимость и сроки.
            Работаю с хорами, ансамблями и вокальными группами по всей России.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-accent to-accent/90 text-white rounded-full hover:shadow-2xl hover:shadow-accent/40 transition-all font-bold text-xl mb-6"
          >
            <Icon name="Phone" size={24} />
            {PHONE}
          </a>
          <p className="text-sm text-muted-foreground">Звонки принимаю с 9:00 до 21:00</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Icon name="Music" size={16} className="text-accent" />
            <span>Распределение песен по голосам</span>
          </div>
          <a href={PHONE_HREF} className="hover:text-white transition-colors font-medium">
            {PHONE}
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;

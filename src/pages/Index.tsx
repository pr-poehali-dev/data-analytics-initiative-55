import { useEffect, useState } from "react";
import { ArrowRight, Music, Mic2, Users, Sparkles, FileMusic, BarChart3 } from "lucide-react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observers: Record<string, IntersectionObserver> = {};

    const sectionIds = ["hero", "features", "how", "pricing", "cta"];

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

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-2xl border-b border-accent/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Music" size={22} className="text-accent" />
            <div className="font-display font-bold text-2xl tracking-tighter bg-gradient-to-r from-white via-accent to-accent/80 bg-clip-text text-transparent">
              VoiceScore
            </div>
          </div>
          <nav className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#features" className="text-muted-foreground hover:text-white transition-colors">
              Возможности
            </a>
            <a href="#how" className="text-muted-foreground hover:text-white transition-colors">
              Как это работает
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-white transition-colors">
              Тарифы
            </a>
          </nav>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 text-sm font-medium border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all">
              Войти
            </button>
            <button className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-accent via-accent to-accent/80 text-white rounded-full hover:shadow-lg hover:shadow-accent/40 transition-all font-semibold">
              Попробовать
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-32 px-6 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
          <img src="/images/black-hole-gif.gif" alt="Music visualization" className="w-auto h-3/4 object-contain" />
        </div>
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-1000 ${visibleSections["hero"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="mb-8 inline-block">
                <span className="text-xs font-medium tracking-widest text-accent/80 uppercase">
                  AI-распределение голосов нового поколения
                </span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-black leading-tight mb-8 tracking-tighter">
                <span className="bg-gradient-to-br from-white via-white to-accent/40 bg-clip-text text-transparent">
                  Каждый голос —
                </span>
                <br />
                <span className="text-accent">на своём месте.</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-xl font-light">
                VoiceScore анализирует песню и автоматически распределяет партии по голосам.
                Сопрано, альт, тенор, бас — AI подберёт идеальное распределение за секунды.
              </p>
              <div className="flex gap-4 mb-12 flex-col sm:flex-row">
                <button className="group px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-white rounded-full hover:shadow-2xl hover:shadow-accent/50 transition-all font-semibold text-lg flex items-center gap-3 justify-center">
                  Загрузить песню
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <button className="px-8 py-4 border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all font-medium text-lg text-white">
                  Смотреть пример
                </button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">5 000+</div>
                  <p className="text-sm text-white/60">Песен обработано</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">98%</div>
                  <p className="text-sm text-white/60">Точность AI</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">4 голоса</div>
                  <p className="text-sm text-white/60">SATB поддержка</p>
                </div>
              </div>
            </div>

            <div
              className={`relative h-96 lg:h-[550px] transition-all duration-1000 flex items-center justify-center ${visibleSections["hero"] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-transparent rounded-3xl blur-3xl animate-pulse" />
              <div className="relative z-10 w-full max-w-sm bg-card/80 border border-accent/20 rounded-3xl p-8 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <Icon name="Music" size={48} className="text-accent mx-auto mb-3" />
                  <p className="text-white/60 text-sm">Анализ партий</p>
                </div>
                {[
                  { voice: "Сопрано", range: "до¹ — до³", color: "from-pink-400 to-accent", bars: 85 },
                  { voice: "Альт", range: "фа — ля²", color: "from-accent to-purple-400", bars: 70 },
                  { voice: "Тенор", range: "до — до²", color: "from-blue-400 to-accent", bars: 65 },
                  { voice: "Бас", range: "ми — ми¹", color: "from-indigo-400 to-blue-400", bars: 55 },
                ].map((item, i) => (
                  <div key={i} className="mb-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white font-medium">{item.voice}</span>
                      <span className="text-white/40">{item.range}</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full animate-pulse`}
                        style={{ width: `${item.bars}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["features"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Возможности</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Всё для хорового дирижёра
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Sparkles",
                title: "AI-анализ партитуры",
                desc: "Загрузите MIDI или ноты — AI мгновенно определит оптимальное распределение партий по голосам",
              },
              {
                icon: "Mic2",
                title: "Диапазон голоса",
                desc: "Учитывает реальный диапазон каждого певца для точного и комфортного распределения партий",
              },
              {
                icon: "Users",
                title: "Управление составом",
                desc: "Добавьте состав хора, укажите голоса — AI распределит партии с учётом численности групп",
              },
              {
                icon: "FileMusic",
                title: "Экспорт нот",
                desc: "Выгружайте готовые партии в PDF, MusicXML или Sibelius для каждой голосовой группы",
              },
              {
                icon: "BarChart3",
                title: "Баланс ансамбля",
                desc: "Автоматическая проверка на гармоническую сбалансированность хорового звучания",
              },
              {
                icon: "Music",
                title: "Любой жанр",
                desc: "Работает с классикой, джазом, фолком, поп-музыкой и авангардом — обученность на тысячах произведений",
              },
              {
                icon: "Phone",
                title: "Свяжитесь с нами",
                desc: "Остались вопросы? Звоните — поможем с любым запросом по распределению партий",
                contact: "+7 (929) 313-64-36",
                href: "tel:+79293136436",
              },
            ].map((item, i) => {
              const isVisible = visibleSections["features"];
              return (
                <div
                  key={i}
                  className={`group p-8 border border-accent/10 hover:border-accent/40 rounded-2xl bg-card/50 hover:bg-card/80 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-accent/10 group-hover:bg-accent/20 rounded-xl flex items-center justify-center mb-5 transition-colors">
                    <Icon name={item.icon} size={22} className="text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  {item.contact && (
                    <a
                      href={item.href}
                      className="mt-4 inline-flex items-center gap-2 text-accent font-semibold text-base hover:text-accent/80 transition-colors"
                    >
                      <Icon name="Phone" size={16} className="text-accent" />
                      {item.contact}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["how"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Процесс</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Четыре шага до готовых партий
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { num: "01", title: "Загрузите", desc: "Загрузите MIDI, XML или вручную введите ноты произведения" },
              { num: "02", title: "Укажите состав", desc: "Добавьте певцов, их голоса и диапазоны в удобном редакторе" },
              { num: "03", title: "AI распределяет", desc: "Алгоритм подбирает оптимальное распределение партий за секунды" },
              { num: "04", title: "Экспортируйте", desc: "Скачивайте готовые ноты для каждой голосовой партии" },
              { num: "☎", title: "Нужна помощь?", desc: "Позвоните нам — поможем на любом шаге", contact: "+7 (929) 313-64-36", href: "tel:+79293136436" },
            ].map((step, i) => {
              const isVisible = visibleSections["how"];
              return (
                <div
                  key={i}
                  className={`relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="group bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 rounded-2xl p-8 h-full flex flex-col justify-between transition-all backdrop-blur-sm cursor-pointer">
                    <div>
                      <div className="text-5xl font-display font-black text-accent mb-4 group-hover:scale-110 transition-transform">
                        {step.num}
                      </div>
                      <h3 className="font-display font-bold text-xl mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                      {step.contact && (
                        <a
                          href={step.href}
                          className="mt-4 inline-flex items-center gap-2 text-accent font-semibold hover:text-accent/80 transition-colors"
                        >
                          <Icon name="Phone" size={15} className="text-accent" />
                          {step.contact}
                        </a>
                      )}
                    </div>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent/40 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6 bg-accent/5">
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["pricing"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Тарифы</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Простые цены
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Для дирижёра",
                price: "1 990 ₽/мес",
                features: [
                  "До 20 произведений в месяц",
                  "SATB и другие составы",
                  "Экспорт в PDF и MusicXML",
                  "Диапазоны до 50 певцов",
                ],
                highlight: false,
              },
              {
                name: "Для коллектива",
                price: "По запросу",
                features: [
                  "Безлимитные произведения",
                  "Командный доступ для всего хора",
                  "Интеграция с нотными редакторами",
                  "Персональное обучение и поддержка",
                ],
                highlight: true,
              },
            ].map((plan, i) => {
              const isVisible = visibleSections["pricing"];
              return (
                <div
                  key={i}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  } ${plan.highlight ? "md:scale-105" : ""}`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  {plan.highlight && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent to-accent/60 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition" />
                  )}
                  <div
                    className={`relative p-10 border rounded-2xl h-full flex flex-col justify-between backdrop-blur-sm transition-all ${
                      plan.highlight ? "border-accent/40 bg-accent/10" : "border-accent/10 bg-card/50 hover:bg-card/80"
                    }`}
                  >
                    <div>
                      <h3 className="font-display font-bold text-2xl mb-2">{plan.name}</h3>
                      <p className="text-4xl font-black text-accent mb-8">{plan.price}</p>
                      <ul className="space-y-4 mb-10">
                        {plan.features.map((f, j) => (
                          <li key={j} className="flex gap-3 text-sm items-start">
                            <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                            <span className="text-foreground/80">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      className={`w-full px-6 py-4 rounded-xl font-semibold transition-all ${
                        plan.highlight
                          ? "bg-gradient-to-r from-accent to-accent/80 text-white hover:shadow-xl hover:shadow-accent/40"
                          : "border border-accent/20 hover:border-accent/40 hover:bg-accent/5"
                      }`}
                    >
                      {plan.highlight ? "Связаться с нами" : "Попробовать бесплатно"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-32 px-6">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${visibleSections["cta"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
              Готовы слышать гармонию?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
            Присоединяйтесь к сотням дирижёров и музыкантов, которые экономят часы на распределении партий.
          </p>
          <button className="group px-10 py-5 bg-gradient-to-r from-accent to-accent/90 text-white rounded-full hover:shadow-2xl hover:shadow-accent/40 transition-all font-bold text-lg flex items-center gap-3 mx-auto">
            Загрузить первую песню
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/10 py-12 px-6 bg-background/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>© 2025 VoiceScore — AI-распределение голосов</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Конфиденциальность
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Условия
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Документация
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
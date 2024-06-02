const reviews = [
  {
    id: 0,
    name: "Renáta Sedlářová",
    review:
      "Moc ráda bych doporučila paní Lucii, která má na svém profilu super praktické rady, snadno pochopitelné pro laika. Pokud máte problém, co se týče účetnictví, nevíte si s něčím rady, doporučuji ozvat se paní Lucii! Vážím si velmi toho, že jako jedna z mála zareagovala i na dotaz ve zprávě. Její odpovědi jsou srozumitelné a navíc podložené zákonem s paragrafy, kde si můžete i tyto informace ověřit.",
  },
  {
    id: 1,
    name: "Soňa Maléterová",
    review:
      "Lucku Birulovú môžem len a len odporúčiť každému, kto očakáva vysoko profesionálny prístup a spoľah. Nie je osoba, ktorej s mojimi fakturáciami a financiami dôverujem viac. Najviac oceňujem ľudský prístup, a obrovskú pomoc aj pri dosť komplikovaných situáciach čo sa týka úradov a papierovačiek. Bez Lucky by som podnikanie snáď dávno vzdala, pretože by som nemala šancu toto všetko riešiť ešte pri práci. Obrovské plus je aj jej takmer okamžitá komunikácia v prípade potreby. Odporúčam!",
  },
  {
    id: 2,
    name: "Backstage Books",
    review:
      "Paní Lucie Birulová je skvělá účetní, která nám pomáhá s rozvojem podnikání v knižním světě. Vždy je nesmírně profesionální, avšak empatická, trpělivá a laskavá. Velice si vážíme jejího osobního a lidského přístupu a jsme moc rádi, že se na ni vždy můžeme spolehnout v každé situaci a vždy se dočkáme návrhu řešení na různé situace, s nimiž se v podnikatelských vodách potýkáme. Děkuji, že takoví lidé podnikají a můžeme se jimi inspirovat.",
  },
  {
    id: 3,
    name: "Veronika Valsová",
    review:
      "V začátku podnikání, jsem hledala účetní. Ideálně takovou, která bude pracovati i online, a našla jsem paní Birulovou. Pomohla mi s celkovým přehledem v začátcích, ujasnila pojmy, vysvětlila, poradila, vše shrnula a trpělivě opakovala, dokud jsem nerozuměla. Připravila mi přehledně a precizně daňové přiznání a já jsem ráda, že jsem našla právě ji. V budoucnu se na ni budu ráda znovu obracet, protože je to nejlepší volba. Děkuji Vám!",
  },
  {
    id: 4,
    name: "Ing. Jaroslava Murinova",
    review:
      "U Lucie Birulové jsem absolvovala webinář pro začínající podnikatele a mohu ho vřele doporučit. Vše bylo skvěle připravené, zazněly opravdu užitečné informace a dojem z Lucie byl super. Ví, o čem mluví, ptá se, má zájem abyste všemu porozuměli, snaží se vše vysvětlit. Pokud hledáte někoho, kdo Vám pomůže s pochopením účetnictví, určitě oslovte Lucii.",
  },
  {
    id: 5,
    name: "Tyna Najmanova",
    review:
      "Webinář pro začínající podnikatele byl skvělý v tom, jak je přehledný a plný opravdu důležitých a užitečných informací. Byla bych za tento webinář hodně ráda v mých podnikatelských začátcích, kdy jsem spoustu věcí nevěděla, nebo se spoléhala na znalosti zaměstnanců na úřadech.",
  },
  {
    id: 6,
    name: "Lenka Štodtová",
    review:
      "Jsem velmi vděčná, že jsem Lucku poznala. Mám vedle sebe partnera, který přemýšlí o mém podnikání a financích jako o svých, velmi mi ulevila od myšlenek a plánů, které jsem si v hlavě dlouhou dobu tvořila, rozvinula je a dala jim reálný obraz. Srovnala moje účetnictví do latě, optimalizovala daně a převzala si agendu, která má teď profesionální vedení a mě rozvolnila ruce. Děkuji.",
  },
  {
    id: 7,
    name: "Anna Fink",
    review:
      "S Lucií jsem maximálně spokojená. Já jsem na tyhle věci levá, takže když jsem začínala podnikat, tak jsem si řekla, že na to nesmím být sama. Lucka mi poradí, zařídí a já mohu být v klidu, že mám vše v pořádku a nemusím se bát. S Lucii spolupracuji několik let a neměnila bych.",
  },
  {
    id: 8,
    name: "Petra Žbánková",
    review:
      "Paní L.Birulová mi byla doporučena kamarádkou jako výborná účetní poradkyně. Její znalosti naprosto předčily mé očekávání! Prodiskutovali jsme veškeré možnosti účtování mnou plánovaného podnikání a byla jsem překvapená, kolik existuje různých variant a také úskalí. Poskytnuté služby byly naprosto profesionální a i po našem poradenství jsem dostala další dodatečné rady a podporu. Moc děkuji!",
  },
  {
    id: 9,
    name: "Lisa Martinovska",
    review:
      "Naprosto neuvěřitelná účetní, která pro Vás udělá maximum. Účetnictví jsem měla spojené s noční můrou, dokud jsem nenarazila na paní Lucii, která je nejen neskutečně milá a ráda Vám vše vysvětlí, ale také úžasně schopná a ochotná. Těším se na další roky spolupráce. 12/10, doporučuji!",
  },
  {
    id: 10,
    name: "Markéta Hanušová",
    review:
      "Paní Birulová umí svou práci velmi dobře. Přátelské, respektující chování, vše okolo účetnictví velmi dobře vysvětleno. Celkem narychlo mi pomáhala s daňovým přiznámím po 1.roce podnikání, velmi rychle zprácváno, detailní pokyny, vše předchystáno, stačilo mi jen vkládat přes datovou schánku. Kromě podkladu, jsem měla přiravené jména datových schránek jednotlivch institucí, také podobu pro sebe do založení účetnictví. Bylo to rychle, efektivní, a s komplexním servisem. Moc děkuji a vřele doporučuji dál. Navíc s paníBirulovou zůstávám dál v kontaktu.",
  },
  {
    id: 11,
    name: "Zdeněk Rückel",
    review:
      "S Lucií Birulovou jsem maximálně spokojený. Převzetí účetnictví proběhlo bez problému. Skoro vše za mě vyřeší, tak mám plno času na své podnikání. Dokáže rychle a kvalitně poradit.",
  },
  {
    id: 12,
    name: "Zuzana Veselá",
    review:
      "Potřebovala jsem někoho, kdo mě provede začátkem podnikání a Lucka byla ta nejlepší volba. Vysvětlit kam jít, co udělat a proč. Chtěla jsem někoho, komu můžu s důvěrou zavolat a on mi srozumitelně vysvětlí situaci. Naše spolupráce běží druhým rokem a já jsem víc než spokojená.",
  },
  {
    id: 13,
    name: "Anna Krejcova",
    review:
      "Dlouho jsem nemohla najít spolehlivou, svědomitou účetní. Až moje dcera mi dala kontakt na paní Lucii, že je s její prací velice spokojená. Domluvili jsme se a již 3.rok spolupracujeme. Doporučuji - komunikace skvělá, vše ohlídá a není drahá ...",
  },
  {
    id: 14,
    name: "Soňa Maléterová",
    review:
      "Jsem velice spokojená se službami Lucie Birulové. Velice doporučuji. Kromě kvality odvedené práce, oceňuji také její milý přístup, trpělivost a komunikaci.",
  },
  {
    id: 15,
    name: "Ter Pechoušková",
    review: "Skvělé služby, příjemná komunikace :)",
  },
];

export default reviews;

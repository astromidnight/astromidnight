// Dicionário central PT/EN. Chaves em pt e en têm de bater sempre certo --
// useTranslations() em utils.ts cai para o pt se faltar uma chave em en.
export const languages = {
  pt: 'Português',
  en: 'English',
} as const;

export const defaultLang = 'pt';

export const ui = {
  pt: {
    // Navegação (Header.astro + Footer.astro)
    'nav.experiencias': 'Experiências noturnas',
    'nav.observacao': 'Observação noturna',
    'nav.retratos': 'Retratos sob as estrelas',
    'nav.alojamentos': 'Para alojamentos rurais',
    'nav.aprende': 'Aprende',
    'nav.astrofotografia': 'Astrofotografia',
    'nav.edicao': 'Edição de imagem deep-sky',
    'nav.loja': 'Loja',
    'nav.eclipse': 'Eclipse 2026',
    'nav.sobre': 'Sobre',
    'nav.contacto': 'Contacto',
    'nav.reservar': 'Reservar',
    'nav.abrirMenu': 'Abrir menu',
    'nav.principal': 'Navegação principal',
    'nav.movel': 'Navegação móvel',
    'nav.inicio': 'Astromidnight — início',
    'breadcrumb.inicio': 'Início',

    // Rodapé (Footer.astro)
    'footer.tagline': 'Observatório privado, Alentejo, Portugal.',
    'footer.nav': 'Navegação do rodapé',
    'footer.instagram': 'Instagram',
    'footer.astrobin': 'Astrobin',
    'footer.termos': 'Termos',
    'footer.privacidade': 'Privacidade',
    'footer.geriCookies': 'Gerir cookies',

    // Hero.astro
    'hero.eyebrow1': 'Observação noturna',
    'hero.eyebrow2': 'A 1 hora de Lisboa',
    'hero.titleLine1': 'O céu que já',
    'hero.titleLine2': 'não vês',
    'hero.desc': '80% das pessoas já não consegue ver a Via Láctea de casa. Descobre os detalhes do cosmos através de sessões privadas no meu observatório.',
    'hero.ctaReservar': 'Reservar sessão',
    'hero.continua': 'continua',
    'hero.continuarAria': 'Continuar para a secção seguinte',

    // About.astro
    'about.greeting': 'Olá, sou o David Cruz.',
    'about.instagramPrefix': 'No Instagram sou o',
    'about.desc': 'Fotografo as estrelas a partir do meu observatório no Alentejo, sob céu livre de poluição luminosa, e é aqui que faço cada sessão e workshop.',
    'about.reconhecimento': 'Reconhecimento',
    'about.colaboracao': 'Colaboração',
    'about.ctaSobre': 'Sobre mim',
    'about.ctaMapa': 'Como chegar',

    // Testimonials.astro
    'testimonials.eyebrow': 'Testemunhos',
    'testimonials.title': 'O que diz a família Astromidnight',
    'testimonials.ratingSuffix': 'no Google',
    'testimonials.reviewWord': 'avaliação',
    'testimonials.reviewWordPlural': 'avaliações',
    'testimonials.writeReview': 'Escrever uma review',
    'testimonials.seeAllReviews': 'Ver todas as reviews',
    'testimonials.emptyState': 'Ainda não há reviews públicas — sê a primeira pessoa a deixar uma.',

    // Shop.astro
    'shop.title': 'O Universo em tua casa',
    'shop.desc': 'Impressões de alta qualidade das minhas melhores astrofotografias.',
    'shop.verLoja': 'Ver toda a loja',
    'shop.printAltSuffix': 'emoldurado em contexto de parede',

    // loja/index.astro
    'shop.indexMetaDesc': 'Compra um print do meu trabalho para a tua parede. Edições impressas sob encomenda, envio grátis.',
    'shop.empty': 'De momento não há prints disponíveis.',

    // loja/[slug].astro
    'shop.metaTitleSuffix': 'Loja Astromidnight',
    'shop.metaDescPrefix': 'Print de',
    'shop.metaDescSuffix': '. Impressão sob encomenda, envio grátis.',
    'shop.detailAltSuffix': '— detalhe',
    'shop.sizeLabel': 'Tamanho:',
    'shop.freeShipping': 'ENVIO GRÁTIS 🎉',
    'shop.order': 'Encomendar',
    'shop.comingSoon': 'Brevemente disponível.',
    'shop.captionLabel': 'Legenda do print:',
    'shop.constellationPrefix': 'Constelação',
    'shop.paperLabel': 'Papel de impressão:',
    'shop.paperDesc': 'A superfície mate e de textura fina do papel fotográfico FUJIFILM Crystal Archive DP II oferece um espectro de cor rico e uma reprodução nítida de detalhe. Graças ao acabamento mate, o papel é praticamente livre de reflexos indesejados e resistente a dedadas.',
    'shop.paperBullet2': 'Papel mate premium, 234 g/m²',
    'shop.shippingLabel': 'Envio:',
    'shop.shipBullet1': 'Envio grátis!',
    'shop.shipBullet2': 'Cada print é impresso por encomenda e demora até 3 dias úteis a preparar.',
    'shop.shipBullet3': 'A entrega na Europa demora 2 a 5 dias úteis, até 7 dias úteis para os EUA e Canadá, e até 14 dias úteis para outros destinos.',
    'shop.shipBullet4': 'Os prints são enviados enrolados (sem moldura) num tubo de cartão.',

    // Community.astro
    'community.title1': 'Universo Astromidnight',
    'community.desc1': 'Fica a par dos próximos eventos, novos trabalhos e projetos de astrofotografia diretamente no teu e-mail.',
    'community.emailLabel': 'O teu email',
    'community.emailPlaceholder': 'o teu email',
    'community.subscrever': 'Subscrever',
    'community.subscrevendo': 'A subscrever...',
    'community.newsletterNote': 'Feito! Já estás na lista.',
    'community.newsletterError': 'Não foi possível subscrever. Tenta de novo.',
    'community.whatsappTitle': 'Fala comigo no WhatsApp',
    'community.whatsappDesc': 'Dúvidas sobre uma sessão, disponibilidade ou o que levar? Escreve-me diretamente.',
    'whatsapp.abrir': 'Abrir WhatsApp',

    // Pillar.astro
    'pillar.saberMais': 'Saber mais',

    // HostSessions.astro
    'hostSessions.title': 'Traz o céu escuro aos teus hóspedes',
    'hostSessions.desc': 'Tens um alojamento rural no Alentejo? Levo o observatório até ao teu espaço e faço uma sessão de observação guiada para os teus grupos — uma experiência que os hóspedes não esquecem.',
    'hostSessions.nameLabel': 'O teu nome',
    'hostSessions.namePlaceholder': 'o teu nome',
    'hostSessions.emailLabel': 'O teu email',
    'hostSessions.emailPlaceholder': 'o teu email',
    'hostSessions.detailsLabel': 'Detalhes',
    'hostSessions.detailsPlaceholder': 'conta-me sobre o teu alojamento e o que procuras',
    'hostSessions.submit': 'Quero saber mais',
    'hostSessions.sending': 'A enviar…',
    'hostSessions.success': 'Recebido — entro em contacto contigo em breve.',
    'hostSessions.error': 'Não foi possível enviar. Tenta de novo ou escreve para o email de contacto.',
    'hostSessions.footerLine': 'Observação guiada · telescópio potente · retratos',
    'hostSessions.subject': 'Novo pedido de alojamento rural — Astromidnight',

    // Pillars da homepage (index.astro)
    'home.stargazing.eyebrow': 'Observação Noturna',
    'home.stargazing.title': 'Sessões privadas no observatório',
    'home.stargazing.desc': 'Aqui não há grupos numerosos. Cada sessão tem um limite de quatro adultos (as crianças não pagam) e é guiada por mim num ambiente descontraído. No final, fazemos alguns retratos para levarem para casa uma lembrança sob as estrelas.',
    'home.stargazing.priceNote': 'por adulto',
    'home.retratos.title': 'O teu retrato, com um mar de estrelas',
    'home.retratos.desc': 'Sessão de fotografia de retrato sob o céu estrelado do Alentejo, com a duração aproximada de 60 minutos. Entrega de 7 a 10 fotos finais editadas.',
    'home.retratos.priceNote': 'por sessão · 1-2 pessoas',
    'home.retratos.imageAlt': 'Casal fotografado sob um céu cheio de estrelas',
    'home.workshops.title': 'Da captura à imagem final',
    'home.workshops.desc': 'Workshops de astrofotografia e cursos de edição de imagem. Acelera a tua curva de aprendizagem, desenvolve as tuas capacidades técnicas de forma estruturada e supera os obstáculos mais comuns na captura e pós-processamento.',

    // Calendar.astro
    'calendar.eyebrow': 'Calendário',
    'calendar.title': 'As próximas noites',
    'calendar.desc': 'Fases da lua e escuridão do céu, noite a noite. Escolhe uma data para veres as condições e reservares o teu lugar.',
    'calendar.viewLabel': 'Vista do calendário',
    'calendar.viewGrid': 'Calendário',
    'calendar.viewList': 'Lista',
    'calendar.prevMonth': 'Mês anterior',
    'calendar.nextMonth': 'Mês seguinte',
    'calendar.selectNight': 'Seleciona uma noite',
    'calendar.weatherForecast': 'Previsão meteorológica',
    'calendar.cloudsSuffix': 'de nuvens',
    'calendar.darkLabel': 'Escuro',
    'calendar.darkSub': 'Melhor para céu profundo',
    'calendar.moonLabel': 'Luar',
    'calendar.moonSub': 'Melhor para Lua e Planetas',
    'calendar.close': 'Fechar',
    'calendar.idealFor': 'Ideal para',
    'calendar.howManyAdults': 'Quantos adultos?',
    'calendar.childrenFree': 'Crianças não pagam.',
    'calendar.numberOfAdults': 'Número de adultos',
    'calendar.continueBooking': 'Continuar para reserva',
    'calendar.alreadyPast': 'já passou',
    'calendar.moonWord': 'Lua',
    'calendar.moonWordLower': 'lua',
    'calendar.illuminatedWord': 'iluminada',
    'calendar.milkyWayVisible': 'Núcleo da Via Láctea bem visível',
    'calendar.reservar': 'Reservar',
    'calendar.reservarAgora': 'Reservar agora',
    'calendar.disponivel': 'Disponível',
    'calendar.saberMais': 'Saber mais',
    'calendar.brevemente': 'Brevemente',
    'calendar.paraEstaNoite': 'Para esta noite',
    'calendar.observatorioFechado': 'Observatório fechado',
    'calendar.semDisponibilidade': 'Sem disponibilidade',
    'calendar.adultoWord': 'adulto',
    'calendar.weatherTitleSuffix': 'de nebulosidade prevista para esta noite (Open-Meteo)',
    'calendar.desde': 'desde',
    'calendar.descDark': 'Deep-sky, nebulosas e a Via Láctea no telescópio de 250mm.',
    'calendar.descGood': 'Planetas, enxames estelares e objetos brilhantes.',
    'calendar.descBright': 'A Lua ao detalhe e os planetas do momento.',
    'calendar.retratosDesc': 'O teu retrato sob um céu cheio de estrelas. Só em noites de pouca ou nenhuma lua.',

    // CookieBanner.astro
    'cookie.ariaLabel': 'Aviso de cookies',
    'cookie.desc': 'Usamos o Google Analytics para perceber como o site é usado — só com a tua autorização. O motor de reservas e o widget do tempo, de terceiros, podem definir os seus próprios cookies.',
    'cookie.saberMais': 'Saber mais',
    'cookie.rejeitar': 'Rejeitar',
    'cookie.aceitar': 'Aceitar',

    // 404.astro
    'notfound.eyebrow': 'Erro 404',
    'notfound.title': 'Esta página perdeu-se no espaço',
    'notfound.desc': 'A página que procuras não existe ou foi movida. Aqui tens o caminho de volta.',
    'notfound.backHome': 'Voltar ao início',
    'notfound.lojaLink': 'Loja de prints',

    // ContactHero.astro
    'contact.title': 'Entra em contacto',
    'contact.desc': 'Respondo pessoalmente a todas as mensagens. Para dúvidas sobre uma sessão, o WhatsApp é o caminho mais rápido.',
    'contact.portraitAlt': 'David Cruz à noite, sob a Via Láctea, com uma lanterna de cabeça',

    // ContactChannels.astro
    'contact.whatsappDesc': 'Dúvidas rápidas, disponibilidade e o estado do tempo à hora da sessão.',
    'contact.fastestReply': 'Resposta mais rápida',
    'contact.emailDesc': 'Propostas, parcerias, imprensa e tudo o que precise de anexos.',
    'contact.instagramDesc': 'A rede social onde sou mais ativo. Podes sempre enviar uma mensagem direta.',
    'contact.comingSoon': 'Brevemente',
    'contact.whatsappSoon': 'O WhatsApp fica disponível em breve. Entretanto, usa o email ou o formulário aqui em baixo.',

    // ContactForm.astro
    'contact.subject1': 'Reservar uma sessão',
    'contact.subject2': 'Alojamentos rurais',
    'contact.subject3': 'Workshops e mentoria',
    'contact.subject4': 'Prints e loja',
    'contact.subject5': 'Imprensa',
    'contact.subject6': 'Outro assunto',
    'contact.formEyebrow': 'Formulário',
    'contact.formTitle': 'Preferes escrever?',
    'contact.formDesc': 'Se ainda tens dúvidas escolhe um tema e envia uma mensagem.',
    'contact.subjectLabel': 'Assunto',
    'contact.nameLabel': 'O teu nome',
    'contact.namePlaceholder': 'o teu nome',
    'contact.emailLabel': 'O teu email',
    'contact.emailPlaceholder': 'o teu email',
    'contact.messageLabel': 'Mensagem',
    'contact.messagePlaceholder': 'a tua mensagem',
    'contact.send': 'Enviar mensagem',
    'contact.sending': 'A enviar…',
    'contact.success': 'Recebido, respondo assim que puder.',
    'contact.error': 'Não foi possível enviar. Tenta de novo ou escreve para o email de contacto.',
    'contact.subjectField': 'Novo contacto — Astromidnight',

    // ContactLocation.astro
    'contact.whereEyebrow': 'Onde estou',
    'contact.privateObservatory': 'Observatório privado',
    'contact.whereDesc': 'É aqui que decorre cada sessão, workshop e retrato. Como é um espaço privado, a morada exata segue no email de confirmação da reserva.',
    'contact.seeMap': 'Ver no mapa',

    // AboutHero.astro
    'about.title': 'Olá, sou o David Cruz',
    'about.heroDesc': 'Astrofotógrafo e designer digital. Fotografo o céu profundo a partir do meu observatório no Alentejo, sob um dos céus mais escuros de Portugal, e é aqui que recebo cada sessão e workshop.',
    'about.portraitAlt': 'David Cruz junto ao telescópio, no observatório do Alentejo',

    // AboutStory.astro
    'about.storyEyebrow': 'O percurso',
    'about.story1': 'Desde novo que a astronomia me interessou. Habituei-me a ver a Via Láctea nas férias de verão, na aldeia dos meus pais. Em 2020 dei os primeiros passos na astrofotografia, num workshop de fim de semana no campo, e fiquei rendido ao que se conseguia fazer só com uma máquina e um tripé.',
    'about.story2': 'A partir daí nunca mais parei de explorar. Sou designer digital de profissão, o que me permitiu trazer esse conhecimento para o processamento de imagem astronómica, mas a curva de aprendizagem foi enorme. Ainda hoje há sempre muito para aprender, com equipamento novo e novas técnicas de processamento.',
    'about.story3': 'Nos primeiros anos andava sempre a viajar até ao campo para fotografar o céu noturno. Tudo mudou em 2023, quando comprei casa no céu escuro do Alentejo. Passei a ter muitas mais horas sob as estrelas e a minha astrofotografia deu um salto.',

    // AboutLocation.astro
    'about.locationEyebrow': 'Localização',
    'about.locationTitle': 'No céu escuro do Alentejo',
    'about.locationDesc': 'Vivo no Alentejo, com acesso a um céu Bortle 3. Foi aqui que construí um pequeno observatório dedicado ao céu profundo, e tenho por perto zonas muito bonitas para fotografia de paisagem noturna.',
    'about.locationImgAlt': 'O observatório iluminado a vermelho, com a constelação de Orionte no céu',
    'about.seeGallery': 'Ver a galeria no Astrobin',

    // AboutCta.astro
    'about.ctaTitle': 'Vem ver o céu comigo',
    'about.ctaDesc': 'As sessões acontecem no observatório, em grupos pequenos, com o céu do Alentejo por cima.',
    'about.ctaQuestions': 'Tens dúvidas? Contacta-nos',

    // AboutAwards.astro
    'about.awardsEyebrow': 'Reconhecimento',
    'about.awardsTitle': 'Prémios e reconhecimentos',
    'about.awardsDesc': 'Ao longo destes anos como astrofotógrafo tive a sorte de ver algumas das minhas imagens reconhecidas. Esta é a lista dos destaques até hoje.',
    'about.awardsBannerAlt': 'Cartaz da exposição Astronomy Photographer of the Year no National Maritime Museum, em Greenwich',
    'about.linkApod': 'Ver no APOD',
    'about.linkAstrobin': 'Ver no Astrobin',
    'about.linkFacebook': 'Ver no Facebook',
    'about.linkInstagram': 'Ver no Instagram',
    'about.linkImage': 'Ver imagem',

    // Partilha (StargazingHero.astro, PortraitsHero.astro)
    'share.label': 'Partilhar',
    'share.linkCopied': 'Link copiado',
    'share.textStargazing': 'Observação Noturna — Astromidnight',
    'share.textRetratos': 'Retratos sob as Estrelas — Astromidnight',

    // StargazingHero.astro
    'stargazing.title': 'Uma sessão de observação noturna no observatório',
    'stargazing.heroDesc': 'Até quatro adultos (crianças não pagam), telescópio de 250mm, Saturno e nebulosas que a olho nu ninguém vê. Uma experiência guiada por um astrofotógrafo premiado, no céu escuro do Alentejo.',
    'stargazing.heroImgAlt': 'Céu estrelado sobre o observatório do Astromidnight, no Alentejo',

    // StargazingIncluded.astro
    'stargazing.included': 'O que está incluído',
    'stargazing.includedTitle': 'Tudo o que precisas de saber antes de reservar',
    'stargazing.item1': 'Sessão privada, grupo com um máximo de 4 adultos (crianças não pagam)',
    'stargazing.item2': 'Telescópio de 250mm, guiada por um astrofotógrafo premiado pela NASA e pela ESA',
    'stargazing.item3': 'Retrato casual como bónus possível durante a noite — não garantido, só se as condições permitirem (sessão dedicada de retrato é um serviço à parte)',
    'stargazing.item4': 'Duração de 1 a 2 horas, consoante as condições da noite',
    'stargazing.cancelPolicy': 'Política de cancelamento',
    'stargazing.cancelDesc': 'Se as condições meteorológicas não permitirem a sessão, tens sempre opção de remarcar ou reembolso total. Nunca perdes o que pagaste.',
    'stargazing.includedImgAlt': 'Retrato casual sob um céu estrelado, durante uma sessão de observação',

    // StargazingDetails.astro
    'stargazing.detailsEyebrow': 'Detalhes da sessão',
    'stargazing.detailsDesc': 'Uma experiência guiada, do início ao fim: contextualização do céu dessa noite, observação direta pelo telescópio de 250mm e tempo para perguntas. Sessões de terça a sábado, a começar cerca de uma hora após o pôr do sol.',
    'stargazing.stat1Label': 'por adulto · crianças grátis',
    'stargazing.stat2Label': 'duração da sessão',
    'stargazing.stat3Label': 'adultos no máximo',
    'stargazing.stat4Value': 'Retratos',
    'stargazing.stat4Label': 'no final da sessão',

    // StargazingLocation.astro
    'stargazing.observatoryEyebrow': 'Observatório',
    'stargazing.observatoryTitle': 'No coração do Alentejo, sob um céu estrelado',
    'stargazing.observatoryDesc': 'O observatório fica em São Pedro da Gafanhoeira, Alentejo — céu livre de poluição luminosa, longe das cidades. É aqui que decorre cada sessão, workshop e retrato.',

    // StargazingCta.astro
    'stargazing.ctaTitle': 'Pronto para a tua noite no observatório?',

    // StargazingFaq.astro
    'stargazing.faqEyebrow': 'Perguntas frequentes',
    'stargazing.faqTitle': 'Ainda tens dúvidas?',

    // PortraitsHero.astro
    'retratos.heroImgAlt': 'Retrato de um homem sob a Via Láctea, junto a um azinheira, no observatório do Astromidnight',

    // PortraitsIncluded.astro
    'retratos.item1': 'Sessão privada, individual ou casal (1 a 2 pessoas)',
    'retratos.item2': '60 minutos de sessão fotográfica sob o céu estrelado, no observatório',
    'retratos.item3': '7 a 10 fotos finais editadas, entregues por link único após a sessão',
    'retratos.item4': 'Guiada por um astrofotógrafo premiado pela NASA e pela ESA',
    'retratos.notCasual': 'Isto não é o retrato casual do Stargazing',
    'retratos.notCasualDesc': 'Na Observação Noturna existe a possibilidade de um retrato casual, informal e não garantido. Aqui é diferente: uma sessão fotográfica dedicada, com hora marcada só para isto.',
    'retratos.includedImgAlt': 'Casal fotografado sob a Via Láctea, durante uma sessão de retrato dedicada',

    // Genérico, partilhado por várias páginas de "Como funciona"
    'howItWorks.eyebrow': 'Como funciona',

    // PortraitsHowItWorks.astro
    'retratos.howItWorksTitle': 'Da reserva às fotos na tua mão',
    'retratos.step1Title': 'Reservas',
    'retratos.step1Desc': 'Escolhes o horário e pagas no ato, via Cal.com.',
    'retratos.step2Title': 'Sessão',
    'retratos.step2Desc': '60 minutos de fotografia sob o céu estrelado, no observatório.',
    'retratos.step3Title': 'Edição',
    'retratos.step3Desc': 'As fotos são tratadas com cuidado, uma a uma.',
    'retratos.step4Title': 'Entrega',
    'retratos.step4Desc': 'Recebes um link único com 7 a 10 fotos finais.',

    // PortraitsExamples.astro
    'retratos.examplesEyebrow': 'Exemplos',
    'retratos.examplesTitle': 'Retratos de sessões anteriores',
    'retratos.prevExample': 'Exemplo anterior',
    'retratos.nextExample': 'Próximo exemplo',
    'retratos.slide1': 'Grupo de três pessoas sob a Via Láctea, numa sessão de retrato',
    'retratos.slide2': 'Retrato individual sob um céu cheio de estrelas',
    'retratos.slide3': 'Três pessoas sentadas numa estrada sob a Via Láctea, junto a uma azinheira',
    'retratos.slide4': 'Retrato sob as estrelas com os braços erguidos para o céu',
    'retratos.slide5': 'Retrato individual junto a uma azinheira, sob a Via Láctea',
    'retratos.slide6': 'Retrato sob as estrelas a apontar para o céu',
    'retratos.slide7': 'Duas pessoas em retrato sob um céu estrelado',
    'retratos.slide8': 'Retrato de costas, a contemplar a Via Láctea',

    // PortraitsCta.astro
    'retratos.ctaTitle': 'Pronto para o teu retrato sob as estrelas?',

    // PortraitsDetails.astro
    'retratos.detailsEyebrow': 'Descrição e Preço',
    'retratos.detailsDesc': 'Uma sessão privada de fotografia de retrato sob o céu estrelado, no observatório. Guiada do início ao fim, com exposição correta para o céu e para ti ao mesmo tempo — uma técnica pouco comum entre fotógrafos de retrato.',
    'retratos.statPhotosLabel': 'fotos finais editadas',
    'retratos.statPrivateValue': 'Privada',
    'retratos.statPrivateLabel': 'individual ou casal',

    // AstroHero.astro
    'astro.title': 'Uma noite, o teu caminho',
    'astro.heroDesc': 'Sessão privada de astrofotografia no observatório. Escolhe entre astrofotografia de paisagem ou de céu profundo.',
    'astro.factDuration': 'Até 4h',
    'astro.factDurationLabel': 'por sessão',
    'astro.factPriceLabel': 'preço fixo',
    'astro.fact1to1': '1 para 1',
    'astro.fact1to1Label': 'sessão personalizada',
    'astro.factPresencial': 'Presencial',
    'astro.factPresencialLabel': 'no observatório',
    'astro.bookWorkshop': 'Reservar workshop',
    'astro.seeTwoPaths': 'Ver os dois caminhos',

    // AstroPaths.astro
    'astro.pathsEyebrow': 'Os dois caminhos',
    'astro.pathsTitle': 'Escolhes tu, a reserva é a mesma',
    'astro.pathsDesc': 'Não tens de decidir na altura de pagar. Depois de reservares, dizes-me qual dos dois caminhos queres seguir e eu preparo a noite a pensar nisso.',
    'astro.whatWeSee': 'O que vamos ver',
    'astro.gear': 'Equipamento.',

    // AstroWhoFor.astro
    'astro.whoForEyebrow': 'Para quem é',
    'astro.whoForTitle': 'Isto é para ti se...',
    'astro.case1': 'Tens uma boa máquina e nunca conseguiste uma fotografia decente do céu.',
    'astro.case2': 'Já tentaste sozinho e as estrelas saem sempre tremidas ou desfocadas.',
    'astro.case3': 'Compraste equipamento de céu profundo e não sabes por onde começar.',
    'astro.case4': 'Queres aprender no terreno, com o céu à frente, e não em vídeos.',

    // AstroNight.astro
    'astro.nightEyebrow': 'A noite',
    'astro.nightTitle': 'Passo a passo, do plano à imagem',
    'astro.nightDesc': 'São até quatro horas, e o ritmo é o teu. Se quiseres passar metade da noite só a acertar o alinhamento até ficares confortável, passamos.',
    'astro.nightStep1Title': 'Planeamos a noite',
    'astro.nightStep1Desc': 'Antes de pegar na máquina vemos o que está no céu nessa noite, e escolhemos os alvos que fazem sentido para o teu equipamento.',
    'astro.nightStep2Title': 'Montamos o equipamento',
    'astro.nightStep2Desc': 'Alinhamento, focagem e enquadramento. É aqui que se ganha ou se perde a noite toda, e é por isso que damos tempo a este passo.',
    'astro.nightStep3Title': 'Fotografamos',
    'astro.nightStep3Desc': 'Captação acompanhada do princípio ao fim, com espaço para o erro e aprenderes com isso.',
    'astro.nightStep4Title': 'Primeiras imagens',
    'astro.nightStep4Desc': 'Análise das primeiras capturas e sugestão dos próximos passos',

    // AstroHowItWorks.astro
    'astro.howTitle': 'Da reserva à noite no observatório',
    'astro.howDesc': 'Traz roupa quente e calçado fechado. Mesmo no verão, as noites no Alentejo arrefecem bastante depois do pôr do sol.',
    'astro.howStep1Title': 'Reservas a sessão',
    'astro.howStep1Desc': 'Escolhes no calendário e pagas na reserva. São até 4 horas, sigas o caminho que seguires.',
    'astro.howStep2Title': 'Combinamos a noite',
    'astro.howStep2Desc': 'Depois da reserva falo contigo para acertarmos a data e qual dos dois caminhos queres seguir.',
    'astro.howStep3Title': 'Vens ao observatório',
    'astro.howStep3DescPrefix': 'A sessão é presencial, em',
    'astro.howStep3DescSuffix': '. Como é um espaço privado, a morada exata segue no email de confirmação.',
    'astro.howStep4Title': 'Se o tempo não ajudar',
    'astro.howStep4Desc': 'Remarcamos para outra noite ou devolvo o valor por inteiro. Nunca perdes o que pagaste por causa das nuvens.',

    // AstroCta.astro
    'astro.ctaTitle': 'Traz a tua máquina',
    'astro.ctaDesc': 'Até quatro horas, numa sessão 1 para 1, sob um dos céus mais escuros de Portugal.',

    // EditingHero.astro
    'editing.factDurationValue': '2h',
    'editing.factDurationLabel': 'por sessão',
    'editing.factPriceLabel': 'preço fixo',
    'editing.fact1to1Value': '1 para 1',
    'editing.fact1to1Label': 'sessão personalizada',
    'editing.factOnlineValue': 'Online',
    'editing.factOnlineLabel': 'por videochamada',
    'editing.title': 'Uma sessão, o teu problema resolvido',
    'editing.heroDesc': 'Orientação individual para editares os teus dados com confiança, com fluxos de trabalho simples e fáceis de perceber. Do básico ao avançado, dizes-me o que precisas e faço a sessão à tua medida.',
    'editing.bookSession': 'Reservar sessão',
    'editing.seeBeforeAfter': 'Ver antes e depois',
    'editing.heroAlt': 'Sessão de edição em PixInsight, com a imagem separada em estrelas e starless',
    'editing.heroCaption': 'Acompanho a sessão inteira por partilha de ecrã.',

    // EditingWhoFor.astro
    'editing.case1': 'Tens dificuldade em editar os teus próprios dados.',
    'editing.case2': 'Andas perdido na quantidade esmagadora de tutoriais do YouTube.',
    'editing.case3': 'Queres orientação para tirar o máximo do processamento de céu profundo.',
    'editing.case4': 'Já trabalhas com o software, mas não gostas do resultado final.',

    // EditingBeforeAfter.astro
    'editing.baEyebrow': 'Antes e depois',
    'editing.baTitle': 'Dos dados em bruto à imagem final',
    'editing.baDesc': 'Arrasta para veres a diferença. É este o tipo de salto que trabalhamos na sessão, sempre com edição não destrutiva em PixInsight e Photoshop.',
    'editing.baBefore': 'Antes',
    'editing.baAfter': 'Depois',
    'editing.baBeforeAltSuffix': 'antes da edição',
    'editing.baAfterAltSuffix': 'depois da edição',
    'editing.baCompareLabelPrefix': 'Comparar antes e depois de',
    'editing.baChooseExample': 'Escolher exemplo',

    // EditingTopics.astro
    'editing.topicsEyebrow': 'O que vemos',
    'editing.topicsTitle': 'A sessão é feita à tua medida',
    'editing.topicsDesc': 'Não tens de escolher um curso de uma lista. Depois de reservares, dizes-me onde estás e o que queres resolver, e eu preparo a sessão a partir daí. Estes são os temas que podemos cobrir, sozinhos ou combinados.',
    'editing.groupFoundationsLabel': 'Fundações',
    'editing.groupFoundationsIntro': 'Para editares com confiança e consistência, do princípio ao fim.',
    'editing.groupAdvancedLabel': 'Avançado',
    'editing.groupAdvancedIntro': 'Para quem já tem bases sólidas e quer dar um passo em frente.',
    'editing.agendaLabel': 'Alinhamento',
    'editing.needsLabel': 'Precisas de',

    // EditingApproach.astro
    'editing.approachEyebrow': 'A minha abordagem',
    'editing.approachTitle': 'Simples, pela ordem certa',
    'editing.principle1Title': 'Referências visuais',
    'editing.principle1Desc': 'Trabalhamos sempre com uma referência à vista, para saberes para onde estás a levar a imagem.',
    'editing.principle2Title': 'Tirar partido dos scripts',
    'editing.principle2Desc': 'O PixInsight tem scripts poderosos. O truque está em saber o que cada um faz bem.',
    'editing.principle3Title': 'A ordem certa',
    'editing.principle3Desc': 'Aplicar os scripts pela ordem correta muda o resultado mais do que qualquer afinação.',
    'editing.principle4Title': 'Sem complicar',
    'editing.principle4Desc': 'Nada de complicações de PixelMath. Se há um caminho simples que dá o mesmo, é esse que seguimos.',
    'editing.principle5Title': 'PixInsight para preparar',
    'editing.principle5Desc': 'Corrigir, calibrar a cor e esticar. É aqui que a imagem fica pronta para o resto.',
    'editing.principle6Title': 'Photoshop para levar mais além',
    'editing.principle6Desc': 'É na edição não destrutiva em Photoshop que a imagem ganha o acabamento final.',

    // EditingHowItWorks.astro
    'editing.howTitle': 'Da reserva à imagem final',
    'editing.howDesc': 'Precisas de ter o PixInsight instalado, e o Photoshop para os temas avançados. Os scripts da RC-Astro ajudam mas são opcionais na maioria dos casos.',
    'editing.howStep1Title': 'Reservas a sessão',
    'editing.howStep1Desc': 'Escolhes no calendário e pagas na reserva. São sempre 2 horas, seja qual for o tema.',
    'editing.howStep2Title': 'Combinamos o horário',
    'editing.howStep2Desc': 'Depois da reserva entro em contacto contigo para acertarmos a hora que te dá jeito.',
    'editing.howStep3Title': 'Dizes-me o que precisas',
    'editing.howStep3Desc': 'Antes da sessão contas-me onde estás e o que queres resolver, para eu preparar tudo.',
    'editing.howStep4Title': 'Trabalhamos com os teus dados',
    'editing.howStep4Desc': 'Usamos as tuas imagens. Se ainda não tens nada com que trabalhar, forneço eu os dados.',
    'editing.howStep5Title': 'Acompanho do início ao fim',
    'editing.howStep5Desc': 'A sessão é online, por videochamada, e guio-te durante todo o tempo por partilha de ecrã.',

    // EditingCta.astro
    'editing.ctaTitle': 'Traz os teus dados',
    'editing.ctaDesc': 'Duas horas, numa 1 para 1, à volta do que precisas de resolver.',

    // LegalContent.astro + termos.astro + privacidade.astro
    'legal.updatedLabel': 'Última atualização:',
    'legal.updatedDate': '2 de agosto de 2026',
    'legal.termosTitle': 'Termos e Condições',
    'legal.termosMetaDesc': 'Termos e condições de utilização do site e de reserva dos serviços da Astromidnight: observação noturna, retratos, workshops e loja de prints.',
    'legal.privacidadeTitle': 'Política de Privacidade',
    'legal.privacidadeMetaDesc': 'Como a Astromidnight recolhe, usa e protege os teus dados pessoais ao reservares uma sessão, escreveres pelo formulário ou comprares um print.',

    // StructuredData.astro
    'structuredData.jobTitle': 'Astrofotógrafo',
    'structuredData.businessDesc': 'Observatório privado no Alentejo, Portugal, com sessões de observação noturna, retratos sob as estrelas e workshops de astrofotografia, guiados por David Cruz, astrofotógrafo premiado pela NASA e pela ESA.',
    'structuredData.awardApy': 'Astronomy Photographer of the Year — Finalista (2023)',
    'structuredData.awardEsa': 'Destacado pela Agência Espacial Europeia (ESA)',
  },
  en: {
    // Navegação (Header.astro + Footer.astro)
    'nav.experiencias': 'Nightly experiences',
    'nav.observacao': 'Stargazing',
    'nav.retratos': 'Portraits under the stars',
    'nav.alojamentos': 'For rural stays',
    'nav.aprende': 'Learn',
    'nav.astrofotografia': 'Astrophotography',
    'nav.edicao': 'Deep-sky image editing',
    'nav.loja': 'Shop',
    'nav.eclipse': 'Eclipse 2026',
    'nav.sobre': 'About',
    'nav.contacto': 'Contact',
    'nav.reservar': 'Book now',
    'nav.abrirMenu': 'Open menu',
    'nav.principal': 'Main navigation',
    'nav.movel': 'Mobile navigation',
    'nav.inicio': 'Astromidnight — home',
    'breadcrumb.inicio': 'Home',

    // Rodapé (Footer.astro)
    'footer.tagline': 'Private observatory, Alentejo, Portugal.',
    'footer.nav': 'Footer navigation',
    'footer.instagram': 'Instagram',
    'footer.astrobin': 'Astrobin',
    'footer.termos': 'Terms',
    'footer.privacidade': 'Privacy',
    'footer.geriCookies': 'Manage cookies',

    // Hero.astro
    'hero.eyebrow1': 'Stargazing',
    'hero.eyebrow2': '1 hour from Lisbon',
    'hero.titleLine1': "The sky you've",
    'hero.titleLine2': 'stopped seeing',
    'hero.desc': "80% of people can no longer see the Milky Way from home. Discover the cosmos up close on a private session at my observatory.",
    'hero.ctaReservar': 'Book a session',
    'hero.continua': 'scroll',
    'hero.continuarAria': 'Continue to the next section',

    // About.astro
    'about.greeting': "Hi, I'm David Cruz.",
    'about.instagramPrefix': "On Instagram I go by",
    'about.desc': 'I photograph the stars from my observatory in Alentejo, under skies free of light pollution — this is where every session and workshop happens.',
    'about.reconhecimento': 'Recognition',
    'about.colaboracao': 'Collaboration',
    'about.ctaSobre': 'About me',
    'about.ctaMapa': 'Get directions',

    // Testimonials.astro
    'testimonials.eyebrow': 'Testimonials',
    'testimonials.title': 'What the Astromidnight family says',
    'testimonials.ratingSuffix': 'on Google',
    'testimonials.reviewWord': 'review',
    'testimonials.reviewWordPlural': 'reviews',
    'testimonials.writeReview': 'Write a review',
    'testimonials.seeAllReviews': 'See all reviews',
    'testimonials.emptyState': 'No public reviews yet — be the first to leave one.',

    // Shop.astro
    'shop.title': 'The universe in your home',
    'shop.desc': 'High-quality prints of my best astrophotography.',
    'shop.verLoja': 'See the whole shop',
    'shop.printAltSuffix': 'framed on a wall',

    // loja/index.astro
    'shop.indexMetaDesc': 'Buy a print of my work for your wall. Made-to-order prints, free shipping.',
    'shop.empty': 'There are no prints available right now.',

    // loja/[slug].astro
    'shop.metaTitleSuffix': 'Astromidnight Shop',
    'shop.metaDescPrefix': 'Print of',
    'shop.metaDescSuffix': '. Made-to-order print, free shipping.',
    'shop.detailAltSuffix': '— detail',
    'shop.sizeLabel': 'Size:',
    'shop.freeShipping': 'FREE SHIPPING 🎉',
    'shop.order': 'Order now',
    'shop.comingSoon': 'Coming soon.',
    'shop.captionLabel': 'Print caption:',
    'shop.constellationPrefix': 'Constellation',
    'shop.paperLabel': 'Print paper:',
    'shop.paperDesc': "The matte, fine-textured surface of FUJIFILM Crystal Archive DP II photo paper delivers a rich color spectrum and sharp detail reproduction. Thanks to the matte finish, the paper is virtually free of unwanted glare and resistant to fingerprints.",
    'shop.paperBullet2': 'Premium matte paper, 234 g/m²',
    'shop.shippingLabel': 'Shipping:',
    'shop.shipBullet1': 'Free shipping!',
    'shop.shipBullet2': 'Each print is made to order and takes up to 3 business days to prepare.',
    'shop.shipBullet3': 'Delivery takes 2 to 5 business days in Europe, up to 7 business days for the US and Canada, and up to 14 business days for other destinations.',
    'shop.shipBullet4': 'Prints are shipped rolled (unframed) in a cardboard tube.',

    // Community.astro
    'community.title1': 'Astromidnight universe',
    'community.desc1': 'Get the next events, new work and astrophotography projects straight to your inbox.',
    'community.emailLabel': 'Your email',
    'community.emailPlaceholder': 'your email',
    'community.subscrever': 'Subscribe',
    'community.subscrevendo': 'Subscribing...',
    'community.newsletterNote': "Done! You're on the list.",
    'community.newsletterError': "Couldn't subscribe. Please try again.",
    'community.whatsappTitle': 'Message me on WhatsApp',
    'community.whatsappDesc': "Questions about a session, availability, or what to bring? Message me directly.",
    'whatsapp.abrir': 'Open WhatsApp',

    // Pillar.astro
    'pillar.saberMais': 'Learn more',

    // HostSessions.astro
    'hostSessions.title': 'Bring dark skies to your guests',
    'hostSessions.desc': "Do you run a rural stay in Alentejo? I'll bring the observatory to your property and guide a stargazing session for your groups — an experience your guests won't forget.",
    'hostSessions.nameLabel': 'Your name',
    'hostSessions.namePlaceholder': 'your name',
    'hostSessions.emailLabel': 'Your email',
    'hostSessions.emailPlaceholder': 'your email',
    'hostSessions.detailsLabel': 'Details',
    'hostSessions.detailsPlaceholder': "tell me about your property and what you're looking for",
    'hostSessions.submit': 'I want to know more',
    'hostSessions.sending': 'Sending…',
    'hostSessions.success': "Got it — I'll be in touch soon.",
    'hostSessions.error': 'Something went wrong. Try again or email me directly.',
    'hostSessions.footerLine': 'Guided stargazing · powerful telescope · portraits',
    'hostSessions.subject': 'New rural stay inquiry — Astromidnight',

    // Pillars da homepage (index.astro)
    'home.stargazing.eyebrow': 'Stargazing',
    'home.stargazing.title': 'Private sessions at the observatory',
    'home.stargazing.desc': "No large groups here. Every session is capped at four adults (kids go free) and I guide it myself, in a relaxed setting. At the end, we take a few portraits so you leave with a keepsake under the stars.",
    'home.stargazing.priceNote': 'per adult',
    'home.retratos.title': 'Your portrait, under a sea of stars',
    'home.retratos.desc': 'A portrait photography session under the starry Alentejo sky, around 60 minutes long. You get 7 to 10 final edited photos.',
    'home.retratos.priceNote': 'per session · 1-2 people',
    'home.retratos.imageAlt': 'Couple photographed under a sky full of stars',
    'home.workshops.title': 'From capture to final image',
    'home.workshops.desc': 'Astrophotography workshops and image editing courses. Speed up your learning curve, build your technical skills in a structured way, and get past the most common hurdles in capture and post-processing.',

    // Calendar.astro
    'calendar.eyebrow': 'Calendar',
    'calendar.title': 'The next nights',
    'calendar.desc': 'Moon phases and sky darkness, night by night. Pick a date to see the conditions and book your spot.',
    'calendar.viewLabel': 'Calendar view',
    'calendar.viewGrid': 'Calendar',
    'calendar.viewList': 'List',
    'calendar.prevMonth': 'Previous month',
    'calendar.nextMonth': 'Next month',
    'calendar.selectNight': 'Select a night',
    'calendar.weatherForecast': 'Weather forecast',
    'calendar.cloudsSuffix': 'cloud cover',
    'calendar.darkLabel': 'Dark',
    'calendar.darkSub': 'Best for deep-sky',
    'calendar.moonLabel': 'Moonlight',
    'calendar.moonSub': 'Best for the Moon and planets',
    'calendar.close': 'Close',
    'calendar.idealFor': 'Ideal for',
    'calendar.howManyAdults': 'How many adults?',
    'calendar.childrenFree': 'Kids go free.',
    'calendar.numberOfAdults': 'Number of adults',
    'calendar.continueBooking': 'Continue to booking',
    'calendar.alreadyPast': 'already past',
    'calendar.moonWord': 'Moon',
    'calendar.moonWordLower': 'moon',
    'calendar.illuminatedWord': 'illuminated',
    'calendar.milkyWayVisible': 'Milky Way core clearly visible',
    'calendar.reservar': 'Book',
    'calendar.reservarAgora': 'Book now',
    'calendar.disponivel': 'Available',
    'calendar.saberMais': 'Learn more',
    'calendar.brevemente': 'Coming soon',
    'calendar.paraEstaNoite': 'For this night',
    'calendar.observatorioFechado': 'Observatory closed',
    'calendar.semDisponibilidade': 'No availability',
    'calendar.adultoWord': 'adult',
    'calendar.weatherTitleSuffix': 'cloud cover forecast for tonight (Open-Meteo)',
    'calendar.desde': 'from',
    'calendar.descDark': 'Deep-sky, nebulae and the Milky Way through the 250mm telescope.',
    'calendar.descGood': 'Planets, star clusters and bright objects.',
    'calendar.descBright': 'The Moon in detail and whichever planets are up.',
    'calendar.retratosDesc': 'Your portrait under a sky full of stars. Only on nights with little or no moon.',

    // CookieBanner.astro
    'cookie.ariaLabel': 'Cookie notice',
    'cookie.desc': 'We use Google Analytics to understand how the site is used — only with your permission. The booking engine and the weather widget, both third-party, may set their own cookies.',
    'cookie.saberMais': 'Learn more',
    'cookie.rejeitar': 'Reject',
    'cookie.aceitar': 'Accept',

    // 404.astro
    'notfound.eyebrow': '404 error',
    'notfound.title': 'This page got lost in space',
    'notfound.desc': "The page you're looking for doesn't exist or was moved. Here's the way back.",
    'notfound.backHome': 'Back to home',
    'notfound.lojaLink': 'Print shop',

    // ContactHero.astro
    'contact.title': 'Get in touch',
    'contact.desc': "I answer every message myself. For questions about a session, WhatsApp is the fastest way.",
    'contact.portraitAlt': 'David Cruz at night, under the Milky Way, with a head torch',

    // ContactChannels.astro
    'contact.whatsappDesc': 'Quick questions, availability and the weather forecast on the night.',
    'contact.fastestReply': 'Fastest reply',
    'contact.emailDesc': 'Proposals, partnerships, press and anything that needs attachments.',
    'contact.instagramDesc': "The social network where I'm most active. You can always send a direct message.",
    'contact.comingSoon': 'Coming soon',
    'contact.whatsappSoon': 'WhatsApp will be available soon. In the meantime, use email or the form below.',

    // ContactForm.astro
    'contact.subject1': 'Book a session',
    'contact.subject2': 'Rural stays',
    'contact.subject3': 'Workshops and mentorship',
    'contact.subject4': 'Prints and shop',
    'contact.subject5': 'Press',
    'contact.subject6': 'Another topic',
    'contact.formEyebrow': 'Form',
    'contact.formTitle': 'Prefer to write?',
    'contact.formDesc': 'If you still have questions, pick a topic and send a message.',
    'contact.subjectLabel': 'Subject',
    'contact.nameLabel': 'Your name',
    'contact.namePlaceholder': 'your name',
    'contact.emailLabel': 'Your email',
    'contact.emailPlaceholder': 'your email',
    'contact.messageLabel': 'Message',
    'contact.messagePlaceholder': 'your message',
    'contact.send': 'Send message',
    'contact.sending': 'Sending…',
    'contact.success': "Got it, I'll reply as soon as I can.",
    'contact.error': 'Something went wrong. Try again or email me directly.',
    'contact.subjectField': 'New contact — Astromidnight',

    // ContactLocation.astro
    'contact.whereEyebrow': 'Where I am',
    'contact.privateObservatory': 'Private observatory',
    'contact.whereDesc': "This is where every session, workshop and portrait happens. Since it's a private space, the exact address follows in the booking confirmation email.",
    'contact.seeMap': 'See on the map',

    // AboutHero.astro
    'about.title': "Hi, I'm David Cruz",
    'about.heroDesc': 'Astrophotographer and digital designer. I photograph the deep sky from my observatory in Alentejo, under one of the darkest skies in Portugal, and this is where I host every session and workshop.',
    'about.portraitAlt': 'David Cruz next to the telescope, at the observatory in Alentejo',

    // AboutStory.astro
    'about.storyEyebrow': 'My journey',
    'about.story1': "Astronomy has interested me since I was young. I grew up seeing the Milky Way during summer holidays at my parents' village. In 2020 I took my first steps in astrophotography, at a weekend workshop in the countryside, and I was hooked by what you could do with just a camera and a tripod.",
    'about.story2': "I never stopped exploring after that. I'm a digital designer by trade, which let me bring that background into astronomical image processing, but the learning curve was huge. Even today there's always more to learn, with new gear and new processing techniques.",
    'about.story3': 'In the early years I was always traveling out to the countryside to photograph the night sky. Everything changed in 2023, when I bought a house under the dark skies of Alentejo. I started getting far more hours under the stars, and my astrophotography took a leap forward.',

    // AboutLocation.astro
    'about.locationEyebrow': 'Location',
    'about.locationTitle': 'Under the dark skies of Alentejo',
    'about.locationDesc': "I live in Alentejo, with access to a Bortle 3 sky. This is where I built a small observatory dedicated to deep-sky imaging, and there are beautiful spots nearby for nightscape photography.",
    'about.locationImgAlt': 'The observatory lit up in red, with the constellation Orion in the sky',
    'about.seeGallery': 'See the gallery on Astrobin',

    // AboutCta.astro
    'about.ctaTitle': 'Come see the sky with me',
    'about.ctaDesc': 'Sessions happen at the observatory, in small groups, under the Alentejo sky.',
    'about.ctaQuestions': 'Have questions? Get in touch',

    // AboutAwards.astro
    'about.awardsEyebrow': 'Recognition',
    'about.awardsTitle': 'Awards and recognition',
    'about.awardsDesc': "Over the years as an astrophotographer I've been lucky enough to have some of my images recognized. Here's the list of highlights so far.",
    'about.awardsBannerAlt': 'Poster for the Astronomy Photographer of the Year exhibition at the National Maritime Museum, Greenwich',
    'about.linkApod': 'See on APOD',
    'about.linkAstrobin': 'See on Astrobin',
    'about.linkFacebook': 'See on Facebook',
    'about.linkInstagram': 'See on Instagram',
    'about.linkImage': 'See image',

    // Partilha (StargazingHero.astro, PortraitsHero.astro)
    'share.label': 'Share',
    'share.linkCopied': 'Link copied',
    'share.textStargazing': 'Stargazing — Astromidnight',
    'share.textRetratos': 'Portraits Under the Stars — Astromidnight',

    // StargazingHero.astro
    'stargazing.title': 'A stargazing session at the observatory',
    'stargazing.heroDesc': "Up to four adults (kids go free), a 250mm telescope, Saturn and nebulae nobody sees with the naked eye. An experience guided by an award-winning astrophotographer, under the dark skies of Alentejo.",
    'stargazing.heroImgAlt': 'Starry sky over the Astromidnight observatory, in Alentejo',

    // StargazingIncluded.astro
    'stargazing.included': "What's included",
    'stargazing.includedTitle': 'Everything you need to know before booking',
    'stargazing.item1': 'Private session, group of up to 4 adults (kids go free)',
    'stargazing.item2': 'A 250mm telescope, guided by an astrophotographer awarded by NASA and ESA',
    'stargazing.item3': "A casual portrait as a possible bonus during the night — not guaranteed, only if conditions allow (a dedicated portrait session is a separate service)",
    'stargazing.item4': "Lasts 1 to 2 hours, depending on the night's conditions",
    'stargazing.cancelPolicy': 'Cancellation policy',
    'stargazing.cancelDesc': "If weather conditions don't allow the session, you can always reschedule or get a full refund. You never lose what you paid.",
    'stargazing.includedImgAlt': 'A casual portrait under a starry sky, during a stargazing session',

    // StargazingDetails.astro
    'stargazing.detailsEyebrow': 'Session details',
    'stargazing.detailsDesc': "A guided experience from start to finish: context on that night's sky, direct viewing through the 250mm telescope, and time for questions. Sessions run Tuesday to Saturday, starting about an hour after sunset.",
    'stargazing.stat1Label': 'per adult · kids free',
    'stargazing.stat2Label': 'session length',
    'stargazing.stat3Label': 'adults max',
    'stargazing.stat4Value': 'Portraits',
    'stargazing.stat4Label': 'at the end of the session',

    // StargazingLocation.astro
    'stargazing.observatoryEyebrow': 'Observatory',
    'stargazing.observatoryTitle': 'In the heart of Alentejo, under a starry sky',
    'stargazing.observatoryDesc': "The observatory is in São Pedro da Gafanhoeira, Alentejo — skies free of light pollution, far from cities. This is where every session, workshop and portrait happens.",

    // StargazingCta.astro
    'stargazing.ctaTitle': 'Ready for your night at the observatory?',

    // StargazingFaq.astro
    'stargazing.faqEyebrow': 'Frequently asked questions',
    'stargazing.faqTitle': 'Still have questions?',

    // PortraitsHero.astro
    'retratos.heroImgAlt': 'Portrait of a man under the Milky Way, next to a holm oak, at the Astromidnight observatory',

    // PortraitsIncluded.astro
    'retratos.item1': 'Private session, solo or as a couple (1 to 2 people)',
    'retratos.item2': '60-minute photo session under the starry sky, at the observatory',
    'retratos.item3': '7 to 10 final edited photos, delivered via a unique link after the session',
    'retratos.item4': 'Guided by an astrophotographer awarded by NASA and ESA',
    'retratos.notCasual': "This isn't the casual Stargazing portrait",
    'retratos.notCasualDesc': "During Stargazing there's a chance of a casual, informal, non-guaranteed portrait. Here it's different: a dedicated photo session, booked just for this.",
    'retratos.includedImgAlt': 'Couple photographed under the Milky Way, during a dedicated portrait session',

    // Genérico, partilhado por várias páginas de "Como funciona"
    'howItWorks.eyebrow': 'How it works',

    // PortraitsHowItWorks.astro
    'retratos.howItWorksTitle': 'From booking to photos in your hands',
    'retratos.step1Title': 'Book',
    'retratos.step1Desc': 'Pick the time and pay on the spot, via Cal.com.',
    'retratos.step2Title': 'Session',
    'retratos.step2Desc': '60 minutes of photography under the starry sky, at the observatory.',
    'retratos.step3Title': 'Editing',
    'retratos.step3Desc': 'Photos are carefully processed, one by one.',
    'retratos.step4Title': 'Delivery',
    'retratos.step4Desc': 'You get a unique link with 7 to 10 final photos.',

    // PortraitsExamples.astro
    'retratos.examplesEyebrow': 'Examples',
    'retratos.examplesTitle': 'Portraits from past sessions',
    'retratos.prevExample': 'Previous example',
    'retratos.nextExample': 'Next example',
    'retratos.slide1': 'Group of three people under the Milky Way, in a portrait session',
    'retratos.slide2': 'Solo portrait under a sky full of stars',
    'retratos.slide3': 'Three people sitting on a road under the Milky Way, next to a holm oak',
    'retratos.slide4': 'Portrait under the stars with arms raised to the sky',
    'retratos.slide5': 'Solo portrait next to a holm oak, under the Milky Way',
    'retratos.slide6': 'Portrait under the stars, pointing at the sky',
    'retratos.slide7': 'Two people in a portrait under a starry sky',
    'retratos.slide8': 'Portrait from behind, gazing at the Milky Way',

    // PortraitsCta.astro
    'retratos.ctaTitle': 'Ready for your portrait under the stars?',

    // PortraitsDetails.astro
    'retratos.detailsEyebrow': 'Description and Price',
    'retratos.detailsDesc': "A private portrait photography session under the starry sky, at the observatory. Guided from start to finish, with correct exposure for the sky and for you at the same time — a technique uncommon among portrait photographers.",
    'retratos.statPhotosLabel': 'final edited photos',
    'retratos.statPrivateValue': 'Private',
    'retratos.statPrivateLabel': 'solo or couple',

    // AstroHero.astro
    'astro.title': 'One night, your path',
    'astro.heroDesc': 'Private astrophotography session at the observatory. Choose between landscape or deep-sky astrophotography.',
    'astro.factDuration': 'Up to 4h',
    'astro.factDurationLabel': 'per session',
    'astro.factPriceLabel': 'fixed price',
    'astro.fact1to1': '1-on-1',
    'astro.fact1to1Label': 'personalized session',
    'astro.factPresencial': 'In person',
    'astro.factPresencialLabel': 'at the observatory',
    'astro.bookWorkshop': 'Book workshop',
    'astro.seeTwoPaths': 'See the two paths',

    // AstroPaths.astro
    'astro.pathsEyebrow': 'The two paths',
    'astro.pathsTitle': 'You choose, the booking is the same',
    'astro.pathsDesc': "You don't have to decide when you pay. After booking, you tell me which of the two paths you want to follow and I'll prepare the night with that in mind.",
    'astro.whatWeSee': "What we'll see",
    'astro.gear': 'Gear.',

    // AstroWhoFor.astro
    'astro.whoForEyebrow': "Who it's for",
    'astro.whoForTitle': 'This is for you if...',
    'astro.case1': "You have a good camera and never managed a decent shot of the sky.",
    'astro.case2': 'You already tried on your own and the stars always come out shaky or blurry.',
    'astro.case3': "You bought deep-sky gear and don't know where to start.",
    'astro.case4': 'You want to learn in the field, with the sky in front of you, not from videos.',

    // AstroNight.astro
    'astro.nightEyebrow': 'The night',
    'astro.nightTitle': 'Step by step, from plan to image',
    'astro.nightDesc': "It's up to four hours, and the pace is yours. If you want to spend half the night just nailing the alignment until you're comfortable, that's fine.",
    'astro.nightStep1Title': 'We plan the night',
    'astro.nightStep1Desc': "Before picking up the camera we check what's in the sky that night, and choose the targets that make sense for your gear.",
    'astro.nightStep2Title': 'We set up the gear',
    'astro.nightStep2Desc': "Alignment, focusing and framing. This is where the whole night is won or lost, which is why we take our time with this step.",
    'astro.nightStep3Title': 'We shoot',
    'astro.nightStep3Desc': "Guided capture from start to finish, with room to make mistakes and learn from them.",
    'astro.nightStep4Title': 'First images',
    'astro.nightStep4Desc': 'Reviewing the first captures and suggesting next steps',

    // AstroHowItWorks.astro
    'astro.howTitle': 'From booking to the night at the observatory',
    'astro.howDesc': "Bring warm clothes and closed shoes. Even in summer, nights in Alentejo cool down a lot after sunset.",
    'astro.howStep1Title': 'You book the session',
    'astro.howStep1Desc': "Pick it on the calendar and pay at booking. It's up to 4 hours, whichever path you follow.",
    'astro.howStep2Title': 'We set up the night',
    'astro.howStep2Desc': "After booking I get in touch to confirm the date and which of the two paths you want to follow.",
    'astro.howStep3Title': 'You come to the observatory',
    'astro.howStep3DescPrefix': 'The session is in person, in',
    'astro.howStep3DescSuffix': ". Since it's a private space, the exact address follows in the confirmation email.",
    'astro.howStep4Title': "If the weather doesn't help",
    'astro.howStep4Desc': "We reschedule for another night or I refund you in full. You never lose what you paid because of clouds.",

    // AstroCta.astro
    'astro.ctaTitle': 'Bring your camera',
    'astro.ctaDesc': 'Up to four hours, in a 1-on-1 session, under one of the darkest skies in Portugal.',

    // EditingHero.astro
    'editing.factDurationValue': '2h',
    'editing.factDurationLabel': 'per session',
    'editing.factPriceLabel': 'fixed price',
    'editing.fact1to1Value': '1-on-1',
    'editing.fact1to1Label': 'personalized session',
    'editing.factOnlineValue': 'Online',
    'editing.factOnlineLabel': 'by video call',
    'editing.title': 'One session, your problem solved',
    'editing.heroDesc': "One-on-one guidance to edit your data with confidence, with simple, easy-to-follow workflows. From basics to advanced, you tell me what you need and I'll tailor the session to you.",
    'editing.bookSession': 'Book session',
    'editing.seeBeforeAfter': 'See before and after',
    'editing.heroAlt': 'Editing session in PixInsight, with the image split into stars and starless',
    'editing.heroCaption': 'I guide the whole session via screen share.',

    // EditingWhoFor.astro
    'editing.case1': 'You struggle to edit your own data.',
    'editing.case2': "You're lost in the overwhelming number of YouTube tutorials.",
    'editing.case3': 'You want guidance to get the most out of deep-sky processing.',
    'editing.case4': "You already work with the software, but don't like the final result.",

    // EditingBeforeAfter.astro
    'editing.baEyebrow': 'Before and after',
    'editing.baTitle': 'From raw data to the final image',
    'editing.baDesc': 'Drag to see the difference. This is the kind of leap we work on in the session, always with non-destructive editing in PixInsight and Photoshop.',
    'editing.baBefore': 'Before',
    'editing.baAfter': 'After',
    'editing.baBeforeAltSuffix': 'before editing',
    'editing.baAfterAltSuffix': 'after editing',
    'editing.baCompareLabelPrefix': 'Compare before and after of',
    'editing.baChooseExample': 'Choose example',

    // EditingTopics.astro
    'editing.topicsEyebrow': 'What we cover',
    'editing.topicsTitle': 'The session is tailored to you',
    'editing.topicsDesc': "You don't have to pick a course from a list. After booking, you tell me where you're at and what you want to solve, and I'll prepare the session from there. These are the topics we can cover, on their own or combined.",
    'editing.groupFoundationsLabel': 'Foundations',
    'editing.groupFoundationsIntro': 'To edit with confidence and consistency, from start to finish.',
    'editing.groupAdvancedLabel': 'Advanced',
    'editing.groupAdvancedIntro': 'For those who already have solid foundations and want to take a step further.',
    'editing.agendaLabel': 'Agenda',
    'editing.needsLabel': "You'll need",

    // EditingApproach.astro
    'editing.approachEyebrow': 'My approach',
    'editing.approachTitle': 'Simple, in the right order',
    'editing.principle1Title': 'Visual references',
    'editing.principle1Desc': "We always work with a reference in sight, so you know where you're taking the image.",
    'editing.principle2Title': 'Making the most of scripts',
    'editing.principle2Desc': 'PixInsight has powerful scripts. The trick is knowing what each one does well.',
    'editing.principle3Title': 'The right order',
    'editing.principle3Desc': 'Applying scripts in the right order changes the result more than any fine-tuning.',
    'editing.principle4Title': 'Keep it simple',
    'editing.principle4Desc': "No PixelMath complications. If there's a simple path that gets the same result, that's the one we take.",
    'editing.principle5Title': 'PixInsight to prepare',
    'editing.principle5Desc': 'Correcting, calibrating color and stretching. This is where the image gets ready for the rest.',
    'editing.principle6Title': 'Photoshop to take it further',
    'editing.principle6Desc': "It's in non-destructive editing in Photoshop that the image gets its final finish.",

    // EditingHowItWorks.astro
    'editing.howTitle': 'From booking to the final image',
    'editing.howDesc': 'You need PixInsight installed, and Photoshop for the advanced topics. RC-Astro scripts help but are optional in most cases.',
    'editing.howStep1Title': 'You book the session',
    'editing.howStep1Desc': "Pick it on the calendar and pay at booking. It's always 2 hours, whatever the topic.",
    'editing.howStep2Title': 'We set up the time',
    'editing.howStep2Desc': 'After booking I get in touch to arrange a time that works for you.',
    'editing.howStep3Title': 'You tell me what you need',
    'editing.howStep3Desc': "Before the session you tell me where you're at and what you want to solve, so I can prepare everything.",
    'editing.howStep4Title': 'We work with your data',
    'editing.howStep4Desc': "We use your images. If you don't have anything to work with yet, I'll provide the data.",
    'editing.howStep5Title': 'I guide you from start to finish',
    'editing.howStep5Desc': 'The session is online, via video call, and I guide you the whole time through screen sharing.',

    // EditingCta.astro
    'editing.ctaTitle': 'Bring your data',
    'editing.ctaDesc': 'Two hours, one-on-one, focused on what you need to solve.',

    // LegalContent.astro + termos.astro + privacidade.astro
    'legal.updatedLabel': 'Last updated:',
    'legal.updatedDate': 'August 2, 2026',
    'legal.termosTitle': 'Terms and Conditions',
    'legal.termosMetaDesc': "Terms and conditions for using the site and booking Astromidnight's services: stargazing, portraits, workshops and the print shop.",
    'legal.privacidadeTitle': 'Privacy Policy',
    'legal.privacidadeMetaDesc': 'How Astromidnight collects, uses and protects your personal data when you book a session, write through the contact form, or buy a print.',

    // StructuredData.astro
    'structuredData.jobTitle': 'Astrophotographer',
    'structuredData.businessDesc': 'Private observatory in Alentejo, Portugal, with stargazing sessions, portraits under the stars and astrophotography workshops, guided by David Cruz, an astrophotographer featured by NASA and the ESA.',
    'structuredData.awardApy': 'Astronomy Photographer of the Year — Finalist (2023)',
    'structuredData.awardEsa': 'Featured by the European Space Agency (ESA)',
  },
} as const;

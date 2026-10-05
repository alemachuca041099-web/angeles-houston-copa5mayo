export type TranslationEntry = { es: string; en: string };

export const TRANSLATIONS: Record<string, TranslationEntry> = {
  // ============ NAVBAR ============
  'nav.inicio': { es: 'Inicio', en: 'Home' },
  'nav.torneos': { es: 'Torneos', en: 'Tournaments' },
  'nav.partidos': { es: 'Partidos', en: 'Matches' },
  'nav.resultados': { es: 'Resultados', en: 'Results' },
  'nav.tabla': { es: 'Tabla', en: 'Standings' },
  'nav.equipos': { es: 'Equipos', en: 'Teams' },
  'nav.galeria': { es: 'Galería', en: 'Gallery' },
  'nav.patrocinadores': { es: 'Patrocinadores', en: 'Sponsors' },
  'nav.contacto': { es: 'Contacto', en: 'Contact' },
  'nav.cta': { es: 'Únete a la liga', en: 'Join the league' },
  'nav.brand.line1': { es: 'Ángeles', en: 'Ángeles' },
  'nav.brand.line2': { es: 'Houston', en: 'Houston' },

  // ============ FOOTER ============
  'footer.tagline': {
    es: 'Copa 5 de Mayo Houston 2027. La casa del fútbol amateur de alto nivel en Houston, Texas.',
    en: 'Copa 5 de Mayo Houston 2027. Home of top-level amateur soccer in Houston, Texas.'
  },
  'footer.col.liga': { es: 'Liga', en: 'League' },
  'footer.col.contenido': { es: 'Contenido', en: 'Content' },
  'footer.col.contacto': { es: 'Contacto', en: 'Contact' },
  'footer.address': { es: 'Houston, Texas, Estados Unidos', en: 'Houston, Texas, USA' },
  'footer.copyright': { es: 'Liga Ángeles Houston. Todos los derechos reservados.', en: 'Liga Ángeles Houston. All rights reserved.' },
  'footer.designed': { es: 'Sitio web por', en: 'Website by' },
  'footer.privacy': { es: 'Aviso de privacidad', en: 'Privacy notice' },
  'footer.sponsorInvite.title': { es: '¿Tu marca quiere estar aquí?', en: 'Want your brand here?' },
  'footer.sponsorInvite.subtitle': { es: 'Súmate como patrocinador de la Copa 5 de Mayo Houston 2027.', en: 'Become a sponsor of the Copa 5 de Mayo Houston 2027.' },

  // ============ COMMON ============
  'common.posterSoon': { es: 'Cartel próximamente', en: 'Poster coming soon' },
  'common.photoSoon': { es: 'Foto próximamente', en: 'Photo coming soon' },
  'common.viewAll': { es: 'Ver todo', en: 'View all' },
  'common.teamPending': { es: 'Equipo por confirmar', en: 'Team TBD' },
  'common.venue': { es: 'Sede', en: 'Venue' },
  'common.teams': { es: 'Equipos', en: 'Teams' },
  'common.sorteo': { es: 'Sorteo', en: 'Draw' },
  'common.tbd': { es: 'Por confirmar', en: 'TBD' },

  // ============ HOME ============
  'home.hero.eyebrow': { es: 'Copa 5 de Mayo · Houston 2027', en: 'Copa 5 de Mayo · Houston 2027' },
  'home.hero.title1': { es: 'La corona del', en: 'The crown of' },
  'home.hero.title2': { es: 'fútbol houstoniano', en: 'Houston soccer' },
  'home.hero.subtitle': {
    es: '32 equipos, un solo trofeo y $60,000 USD en juego. La Copa 5 de Mayo Houston 2027 se disputa el 1 y 2 de mayo en Houston, Texas.',
    en: '32 teams, one trophy, and $60,000 USD on the line. The Copa 5 de Mayo Houston 2027 takes place May 1-2 in Houston, Texas.'
  },
  'home.hero.cta1': { es: 'Ver próximos partidos', en: 'View upcoming matches' },
  'home.hero.cta2': { es: 'Tabla general', en: 'Standings' },
  'home.hero.scroll': { es: 'Desliza', en: 'Scroll' },

  'home.tournament.kicker': { es: 'Torneo activo', en: 'Active tournament' },
  'home.tournament.start': { es: 'Inicio', en: 'Start' },
  'home.tournament.end': { es: 'Final', en: 'End' },
  'home.tournament.teams': { es: 'Equipos', en: 'Teams' },
  'home.tournament.cta': { es: 'Explorar torneos', en: 'Explore tournaments' },

  'home.countdown.kicker': { es: 'Estamos en cuenta regresiva', en: "We're in the countdown" },
  'home.countdown.title': {
    es: 'Sorteo el <span class=\'gold-text\'>28 de abril</span> · Arranque el <span class=\'gold-text\'>1 de mayo de 2027</span>',
    en: 'Draw on <span class=\'gold-text\'>April 28</span> · Kickoff on <span class=\'gold-text\'>May 1, 2027</span>'
  },
  'home.countdown.note': {
    es: 'El 28 de abril se sortean los 8 grupos (sede por confirmar). Después de eso publicamos el calendario completo, jornada por jornada.',
    en: 'The 8 groups are drawn on April 28 (venue TBD). After that we’ll publish the full schedule, matchday by matchday.'
  },
  'home.countdown.linkCalendar': { es: 'Ver calendario', en: 'View schedule' },
  'home.countdown.linkResults': { es: 'Ver resultados', en: 'View results' },

  'home.format.kicker': { es: 'Formato del torneo', en: 'Tournament format' },
  'home.format.title': {
    es: '8 grupos de <span class=\'gold-text\'>4 equipos</span>',
    en: '8 groups of <span class=\'gold-text\'>4 teams</span>'
  },
  'home.format.subtitle': {
    es: 'Los grupos se sortean el 28 de abril de 2027. La tabla se activa automáticamente en cuanto arranquen los partidos.',
    en: 'Groups are drawn on April 28, 2027. The standings table activates automatically once matches begin.'
  },
  'home.format.cta': { es: 'Ver formato completo', en: 'View full format' },

  'home.teams.kicker': { es: 'Los contendientes', en: 'The contenders' },
  'home.teams.title': { es: 'Equipos de la <span class=\'gold-text\'>liga</span>', en: 'Teams of the <span class=\'gold-text\'>league</span>' },
  'home.teams.subtitle': { es: 'Hasta 32 escuadras lucharán por levantar el trofeo dorado. Las inscripciones siguen abiertas.', en: 'Up to 32 squads will battle to lift the golden trophy. Registration is still open.' },
  'home.teams.cta': { es: 'Ver todos los equipos', en: 'View all teams' },
  'home.teams.waiting': { es: 'Los equipos se irán revelando conforme se confirmen las inscripciones.', en: 'Teams will be revealed as registrations are confirmed.' },

  'home.gallery.kicker': { es: 'Momentos', en: 'Moments' },
  'home.gallery.title': { es: 'Galería de la <span class=\'gold-text\'>afición</span>', en: 'Fan <span class=\'gold-text\'>gallery</span>' },
  'home.gallery.subtitle': { es: 'Las mejores tomas de cancha, tribuna y premiación.', en: 'The best shots from the field, the stands, and award ceremonies.' },
  'home.gallery.cta': { es: 'Ver galería completa', en: 'View full gallery' },

  'home.sponsors.kicker': { es: 'Aliados oficiales', en: 'Official partners' },
  'home.sponsors.title': { es: 'Con el respaldo de <span class=\'gold-text\'>grandes marcas</span>', en: 'Backed by <span class=\'gold-text\'>great brands</span>' },

  'home.cta.title': { es: '¿Listo para vivir la <span class="gold-text">Copa 5 de Mayo</span>?', en: 'Ready to experience the <span class="gold-text">Copa 5 de Mayo</span>?' },
  'home.cta.subtitle': { es: 'Regístra a tu equipo, consulta el calendario o súmate como patrocinador de la próxima edición.', en: 'Register your team, check the schedule, or become a sponsor of the next edition.' },
  'home.cta.contact': { es: 'Contáctanos', en: 'Contact us' },
  'home.cta.sponsor': { es: 'Ser patrocinador', en: 'Become a sponsor' },

  // ============ TORNEOS ============
  'torneos.header.kicker': { es: 'Competiciones oficiales', en: 'Official competitions' },
  'torneos.header.title': { es: 'Torneos de la <span class=\'gold-text\'>liga</span>', en: 'League <span class=\'gold-text\'>tournaments</span>' },
  'torneos.header.subtitle': { es: 'Consulta el estatus, formato y fechas de cada competición organizada por Ángeles Houston.', en: 'Check the status, format, and dates of every competition organized by Ángeles Houston.' },
  'torneos.season': { es: 'Temporada', en: 'Season' },
  'torneos.teams': { es: 'Equipos', en: 'Teams' },
  'torneos.tournamentDates': { es: 'Torneo', en: 'Tournament' },
  'torneos.sorteo': { es: 'Sorteo', en: 'Draw' },
  'torneos.venue': { es: 'Sede', en: 'Venue' },
  'torneos.registration': { es: 'Inscripción', en: 'Registration' },
  'torneos.champion': { es: 'Campeón', en: 'Champion' },
  'torneos.runnerUp': { es: 'Subcampeón', en: 'Runner-up' },
  'torneos.individualAwards': { es: 'Reconocimientos individuales', en: 'Individual awards' },
  'torneos.openingMatch': { es: 'Juego inaugural', en: 'Opening match' },

  // ============ PARTIDOS ============
  'partidos.header.kicker': { es: 'Calendario oficial', en: 'Official schedule' },
  'partidos.header.title': { es: 'Próximos <span class=\'gold-text\'>partidos</span>', en: 'Upcoming <span class=\'gold-text\'>matches</span>' },
  'partidos.header.subtitle': { es: 'El calendario se publica en cuanto se realice el sorteo oficial de grupos.', en: 'The schedule is published as soon as the official group draw takes place.' },
  'partidos.waiting.kicker': { es: 'Sorteo oficial de grupos', en: 'Official group draw' },
  'partidos.waiting.title': { es: 'El calendario se arma el<br /><span class=\'gold-text\'>28 de abril de 2027</span>', en: 'The schedule comes together on<br /><span class=\'gold-text\'>April 28, 2027</span>' },
  'partidos.waiting.body': {
    es: 'Ese día se sortean los <strong>8 grupos de 4 equipos</strong> (sede por confirmar). En cuanto se defina, aquí publicaremos jornada por jornada, con horario y sede de cada partido.',
    en: 'That day the <strong>8 groups of 4 teams</strong> are drawn (venue TBD). Once it’s set, we’ll publish here matchday by matchday, with the time and venue for every game.'
  },
  'partidos.cta1': { es: 'Ver detalles del torneo', en: 'View tournament details' },
  'partidos.cta2': { es: 'Quiero inscribir a mi equipo', en: 'I want to register my team' },

  // ============ RESULTADOS ============
  'resultados.header.kicker': { es: 'Marcadores oficiales', en: 'Official scores' },
  'resultados.header.title': { es: 'Resultados de la <span class=\'gold-text\'>liga</span>', en: 'League <span class=\'gold-text\'>results</span>' },
  'resultados.header.subtitle': { es: 'Aquí encontrarás los marcadores oficiales en cuanto arranque el torneo.', en: 'You’ll find official scores here as soon as the tournament kicks off.' },
  'resultados.waiting.kicker': { es: 'Estamos en cuenta regresiva', en: "We're in the countdown" },
  'resultados.waiting.title': {
    es: '¡Aún no hay resultados<br /><span class=\'gold-text\'>porque el silbatazo no ha sonado!</span>',
    en: 'No results yet<br /><span class=\'gold-text\'>because the whistle hasn’t blown!</span>'
  },
  'resultados.waiting.body': {
    es: 'La Copa 5 de Mayo Houston 2027 arranca el <strong>1 de mayo</strong> en Houston, Texas. En cuanto empiecen los partidos, aquí verás cada marcador oficial.',
    en: 'The Copa 5 de Mayo Houston 2027 kicks off on <strong>May 1</strong> in Houston, Texas. As soon as matches begin, you’ll see every official score here.'
  },

  // ============ TABLA ============
  'tabla.header.kicker': { es: 'Clasificación general', en: 'Overall standings' },
  'tabla.header.title': { es: 'Tabla de <span class=\'gold-text\'>posiciones</span>', en: 'Standings <span class=\'gold-text\'>table</span>' },
  'tabla.header.subtitle': { es: '32 equipos, 8 grupos de 4. La tabla se activa en cuanto arranquen los partidos.', en: '32 teams, 8 groups of 4. The table activates once matches begin.' },
  'tabla.format.kicker': { es: 'Formato del torneo', en: 'Tournament format' },
  'tabla.format.title': { es: '8 grupos de <span class=\'gold-text\'>4 equipos</span>', en: '8 groups of <span class=\'gold-text\'>4 teams</span>' },
  'tabla.format.body': {
    es: 'Los grupos se definen en el sorteo oficial del <strong>28 de abril de 2027</strong>. Apenas se sorteen los equipos y arranquen los partidos el <strong>1 de mayo</strong>, esta tabla se llenará automáticamente con la clasificación real de cada grupo. Avanzan los 2 primeros de cada grupo a octavos de final.',
    en: 'Groups are set at the official draw on <strong>April 28, 2027</strong>. As soon as teams are drawn and matches begin on <strong>May 1</strong>, this table fills in automatically with each group’s real standings. The top 2 of each group advance to the round of 16.'
  },
  'tabla.groupLabel': { es: 'Grupo', en: 'Group' },
  'tabla.cta': { es: 'Ver detalles del torneo', en: 'View tournament details' },

  // ============ EQUIPOS ============
  'equipos.header.kicker': { es: 'Inscripciones 2027', en: '2027 Registration' },
  'equipos.header.title': { es: 'Equipos de la <span class=\'gold-text\'>Copa 5 de Mayo</span>', en: 'Copa 5 de Mayo <span class=\'gold-text\'>teams</span>' },
  'equipos.header.subtitle': { es: 'Muy pronto conocerás a las escuadras que buscarán el trofeo dorado en Houston.', en: 'You’ll soon meet the squads chasing the golden trophy in Houston.' },
  'equipos.waiting.kicker': { es: 'Inscripciones abiertas', en: 'Registration open' },
  'equipos.waiting.title': {
    es: 'Los equipos se revelan<br /><span class=\'gold-text\'>el 28 de abril de 2027</span>',
    en: 'Teams are revealed<br /><span class=\'gold-text\'>on April 28, 2027</span>'
  },
  'equipos.waiting.body': {
    es: 'Las inscripciones siguen abiertas y aún no hay equipos confirmados. En cuanto se cierre el registro y se realice el sorteo oficial de los <strong>8 grupos</strong>, aquí verás escudo, sede y datos de cada participante.',
    en: 'Registration is still open and no teams are confirmed yet. Once registration closes and the official draw of the <strong>8 groups</strong> takes place, you’ll see the crest, home venue, and details for every participant here.'
  },

  // ============ GALERÍA ============
  'galeria.header.kicker': { es: 'Momentos inolvidables', en: 'Unforgettable moments' },
  'galeria.header.title': { es: 'Galería <span class=\'gold-text\'>oficial</span>', en: 'Official <span class=\'gold-text\'>gallery</span>' },
  'galeria.header.subtitle': { es: 'Acción, afición y premiaciones capturadas en cada jornada de la liga.', en: 'Action, fans, and award moments captured every matchday of the league.' },
  'galeria.loadMore': { es: 'Ver más fotos', en: 'Load more photos' },
  'galeria.close': { es: 'Cerrar', en: 'Close' },

  // ============ PATROCINADORES ============
  'patrocinadores.header.kicker': { es: 'Nuestros aliados', en: 'Our partners' },
  'patrocinadores.header.title': { es: 'Patrocinadores <span class=\'gold-text\'>oficiales</span>', en: 'Official <span class=\'gold-text\'>sponsors</span>' },
  'patrocinadores.header.subtitle': { es: 'Marcas que respaldan el crecimiento del fútbol amateur en el área de Houston.', en: 'Brands supporting the growth of amateur soccer in the Houston area.' },
  'patrocinadores.mainBadge': { es: 'Patrocinador principal', en: 'Title sponsor' },
  'patrocinadores.mainCaption': { es: 'Respaldando la Copa 5 de Mayo Houston 2027 desde su primera edición.', en: 'Backing the Copa 5 de Mayo Houston 2027 since its first edition.' },
  'patrocinadores.waiting.badge': { es: 'Próximamente', en: 'Coming soon' },
  'patrocinadores.waiting.text': { es: 'Nuestros patrocinadores oficiales se anunciarán próximamente. ¿Quieres ser el primero en sumarte?', en: 'Our official sponsors will be announced soon. Want to be the first to join?' },
  'patrocinadores.supplier.kicker': { es: 'Proveedor oficial', en: 'Official supplier' },
  'patrocinadores.why1.label': { es: 'Equipos participantes', en: 'Participating teams' },
  'patrocinadores.why2.label': { es: 'Grupos, un torneo', en: 'Groups, one tournament' },
  'patrocinadores.why3.label': { es: 'Días de torneo en Houston', en: 'Tournament days in Houston' },
  'patrocinadores.level': { es: 'Nivel', en: 'Level' },
  'patrocinadores.tier.oro': { es: 'Oro', en: 'Gold' },
  'patrocinadores.tier.plata': { es: 'Plata', en: 'Silver' },
  'patrocinadores.tier.bronce': { es: 'Bronce', en: 'Bronze' },
  'patrocinadores.cta.title': { es: 'Súmate como patrocinador de la próxima edición', en: 'Join as a sponsor of the next edition' },
  'patrocinadores.cta.subtitle': { es: 'Impulsa el deporte local y posiciona tu marca frente a miles de aficionados.', en: 'Support local sports and put your brand in front of thousands of fans.' },
  'patrocinadores.cta.button': { es: 'Quiero patrocinar', en: 'I want to sponsor' },

  // ============ CONTACTO ============
  'contacto.header.kicker': { es: 'Hablemos', en: "Let's talk" },
  'contacto.header.title': { es: 'Contacta a la <span class=\'gold-text\'>liga</span>', en: 'Contact the <span class=\'gold-text\'>league</span>' },
  'contacto.header.subtitle': { es: 'Registro de equipos, dudas sobre el torneo o propuestas de patrocinio.', en: 'Team registration, tournament questions, or sponsorship proposals.' },
  'contacto.info.kicker': { es: 'Información', en: 'Information' },
  'contacto.info.title': { es: 'Estamos para <span class="gold-text">ayudarte</span>', en: 'We’re here to <span class="gold-text">help</span>' },
  'contacto.venue': { es: 'Sede del torneo', en: 'Tournament venue' },
  'contacto.email': { es: 'Correo', en: 'Email' },
  'contacto.phone': { es: 'Teléfono', en: 'Phone' },
  'contacto.hours': { es: 'Horario', en: 'Hours' },
  'contacto.hoursValue': { es: 'Lun - Vie, 9:00 - 18:00', en: 'Mon - Fri, 9:00 AM - 6:00 PM' },
  'contacto.form.success': { es: '¡Gracias! Tu mensaje fue enviado correctamente.', en: 'Thank you! Your message was sent successfully.' },
  'contacto.form.name': { es: 'Nombre completo', en: 'Full name' },
  'contacto.form.namePlaceholder': { es: 'Tu nombre', en: 'Your name' },
  'contacto.form.nameError': { es: 'Ingresa un nombre válido.', en: 'Please enter a valid name.' },
  'contacto.form.email': { es: 'Correo electrónico', en: 'Email address' },
  'contacto.form.emailPlaceholder': { es: 'tucorreo@ejemplo.com', en: 'you@example.com' },
  'contacto.form.emailError': { es: 'Ingresa un correo válido.', en: 'Please enter a valid email.' },
  'contacto.form.subject': { es: 'Asunto', en: 'Subject' },
  'contacto.form.subject1': { es: 'Información general', en: 'General information' },
  'contacto.form.subject2': { es: 'Registro de equipo', en: 'Team registration' },
  'contacto.form.subject3': { es: 'Patrocinio', en: 'Sponsorship' },
  'contacto.form.subject4': { es: 'Prensa y medios', en: 'Press & media' },
  'contacto.form.message': { es: 'Mensaje', en: 'Message' },
  'contacto.form.messagePlaceholder': { es: 'Cuéntanos en qué te podemos ayudar', en: 'Tell us how we can help' },
  'contacto.form.messageError': { es: 'El mensaje debe tener al menos 10 caracteres.', en: 'Message must be at least 10 characters.' },
  'contacto.form.submit': { es: 'Enviar mensaje', en: 'Send message' },

  // ============ PRIVACIDAD ============
  'privacidad.header.kicker': { es: 'Legal', en: 'Legal' },
  'privacidad.header.title': { es: 'Aviso de <span class=\'gold-text\'>privacidad</span>', en: '<span class=\'gold-text\'>Privacy</span> notice' },
  'privacidad.header.subtitle': { es: 'Cómo protegemos y usamos tu información en este sitio.', en: 'How we protect and use your information on this site.' },

  'privacidad.owner.title': { es: 'Responsable', en: 'Who we are' },
  'privacidad.owner.body': {
    es: 'Este sitio es operado por la organización de la Copa 5 de Mayo Houston 2027 ("nosotros"). Puedes contactarnos en info@houston.tucopacincodemayo.com.',
    en: 'This site is operated by the Copa 5 de Mayo Houston 2027 organization ("us"). You can reach us at info@houston.tucopacincodemayo.com.'
  },
  'privacidad.data.title': { es: 'Datos que recabamos', en: 'Data we collect' },
  'privacidad.data.body': {
    es: 'Cuando usas el formulario de contacto, recabamos tu nombre, correo electrónico, asunto y el mensaje que nos escribes. No recabamos datos de pago ni información sensible a través de este sitio.',
    en: 'When you use the contact form, we collect your name, email address, subject, and the message you send us. We do not collect payment data or sensitive information through this site.'
  },
  'privacidad.use.title': { es: 'Para qué los usamos', en: 'How we use it' },
  'privacidad.use.body': {
    es: 'Usamos tu información únicamente para responder tu mensaje, gestionar inscripciones de equipos y atender propuestas de patrocinio. No la usamos para fines distintos a los que nos contactaste.',
    en: 'We use your information only to reply to your message, manage team registrations, and handle sponsorship proposals. We do not use it for purposes other than what you contacted us about.'
  },
  'privacidad.sharing.title': { es: 'Con quién la compartimos', en: 'Who we share it with' },
  'privacidad.sharing.body': {
    es: 'No vendemos, rentamos ni compartimos tu información con terceros. Solo el equipo organizador de la Copa 5 de Mayo Houston tiene acceso a los mensajes que nos envías.',
    en: "We don't sell, rent, or share your information with third parties. Only the Copa 5 de Mayo Houston organizing team has access to the messages you send us."
  },
  'privacidad.cookies.title': { es: 'Cookies y almacenamiento local', en: 'Cookies and local storage' },
  'privacidad.cookies.body': {
    es: 'Este sitio no usa cookies de rastreo ni de publicidad. Solo guardamos tu preferencia de idioma (español/inglés) en el almacenamiento local de tu navegador, para que no tengas que elegirlo cada vez que visitas el sitio. Puedes borrar esta información cuando quieras desde la configuración de tu navegador.',
    en: "This site doesn't use tracking or advertising cookies. We only save your language preference (Spanish/English) in your browser's local storage, so you don't have to pick it every time you visit. You can clear this at any time from your browser settings."
  },
  'privacidad.rights.title': { es: 'Tus derechos', en: 'Your rights' },
  'privacidad.rights.body': {
    es: 'Puedes solicitarnos en cualquier momento acceder, corregir o eliminar la información que nos hayas compartido, escribiéndonos a info@houston.tucopacincodemayo.com.',
    en: 'You can ask us at any time to access, correct, or delete the information you have shared with us by writing to info@houston.tucopacincodemayo.com.'
  },
  'privacidad.changes.title': { es: 'Cambios a este aviso', en: 'Changes to this notice' },
  'privacidad.changes.body': {
    es: 'Podemos actualizar este aviso de vez en cuando. Publicaremos cualquier cambio en esta misma página.',
    en: 'We may update this notice from time to time. Any changes will be posted on this same page.'
  },
  'privacidad.updated': { es: 'Última actualización: septiembre de 2026.', en: 'Last updated: September 2026.' },

  // ============ GALLERY CATEGORIES ============
  'category.Acción': { es: 'Acción', en: 'Action' },
  'category.Afición': { es: 'Afición', en: 'Fans' },
  'category.Premiación': { es: 'Premiación', en: 'Awards' },
  'category.Detrás de cámaras': { es: 'Detrás de cámaras', en: 'Behind the scenes' },
  'category.Jugadores': { es: 'Jugadores', en: 'Players' },

  // ============ STATUS ============
  'status.En curso': { es: 'En curso', en: 'Ongoing' },
  'status.Próximo': { es: 'Próximo', en: 'Upcoming' },
  'status.Finalizado': { es: 'Finalizado', en: 'Finished' },

  // ============ STATS (hero) ============
  'stats.teams': { es: 'Equipos participantes', en: 'Participating teams' },
  'stats.groups': { es: 'Grupos de 4 equipos', en: 'Groups of 4 teams' },
  'stats.qualified': { es: 'Clasificados a octavos', en: 'Qualified to round of 16' },
  'stats.prize': { es: 'Premio al campeón', en: 'Champion prize' },

  // ============ CHAT WIDGET ============
  'chat.title': { es: 'Asistente Copa 5 de Mayo', en: 'Copa 5 de Mayo Assistant' },
  'chat.subtitle': { es: 'Responde al instante', en: 'Instant answers' },
  'chat.open': { es: 'Abrir chat', en: 'Open chat' },
  'chat.teaser': { es: '¿Tu equipo o tu marca? ¡Pregúntame!', en: 'Your team or your brand? Ask me!' },
  'chat.close': { es: 'Cerrar chat', en: 'Close chat' },
  'chat.greeting': {
    es: '¡Hola! Soy el asistente de la Copa 5 de Mayo Houston. Pregúntame sobre fechas, formato, premios, inscripción o patrocinios.',
    en: 'Hi! I\'m the Copa 5 de Mayo Houston assistant. Ask me about dates, format, prizes, registration, or sponsorships.'
  },
  'chat.placeholder': { es: 'Escríbenos por WhatsApp...', en: 'Message us on WhatsApp...' },
  'chat.send': { es: 'Enviar por WhatsApp', en: 'Send on WhatsApp' },
  'chat.quickQuestions': { es: 'Preguntas frecuentes', en: 'Common questions' },
  'chat.scrollHint': { es: 'Desliza para ver más ↓', en: 'Scroll for more ↓' },
  'chat.reset': { es: 'Reiniciar chat', en: 'Reset chat' },

  // ============ COOKIE BANNER ============
  'cookies.banner.title': { es: 'Cookies', en: 'Cookies' },
  'cookies.banner.text': {
    es: 'Solo guardamos tu idioma preferido. Sin rastreo, sin anuncios.',
    en: 'We only save your preferred language. No tracking, no ads.'
  },
  'cookies.banner.link': { es: 'Más información', en: 'Learn more' },
  'cookies.banner.decline': { es: 'Rechazar', en: 'Decline' },
  'cookies.banner.accept': { es: 'Aceptar', en: 'Accept' },

  // ============ COUNTDOWN ============
  'countdown.days': { es: 'Días', en: 'Days' },
  'countdown.hours': { es: 'Horas', en: 'Hours' },
  'countdown.minutes': { es: 'Min', en: 'Min' },
  'countdown.seconds': { es: 'Seg', en: 'Sec' }
};

// ---------- I18N (FR/EN toggle) ----------
(function () {
  var EN = {
    // Navigation
    'nav.brandAria': 'Dar Aïcha — Home',
    'nav.mainAria': 'Main navigation',
    'nav.villa': 'The Villa',
    'nav.espaces': 'Our Spaces',
    'nav.sejourner': 'Stay',
    'nav.evenements': 'Events',
    'nav.privatisation': 'Private Stays',
    'nav.huile': 'Olive Oil',
    'nav.region': 'Property & Region',
    'nav.avis': 'Reviews',
    'nav.contact': 'Contact',
    'nav.reserver': 'Book Now',
    'nav.themeAria': 'Switch theme',
    'nav.menuAria': 'Open menu',

    // Hero
    'hero.imgAlt': 'Entrance driveway of Villa Dar Aïcha in Tazarka, contemporary white architecture with local stone, engraved pediment and Mediterranean garden',
    'hero.badge1': '★ 4.88/5 · Airbnb Superhost',
    'hero.badge2': '9.0/10 · Vrbo & Abritel',
    'hero.badge3': '4 hectares · Olive grove',
    'hero.h1': 'An exceptional seaside villa in the heart of Cap Bon',
    'hero.lede': '9 suites, infinity pool and olive grove in Tazarka — upscale seasonal rental, guesthouse and private events.',
    'hero.cta1': 'Request a Quote',
    'hero.cta2': 'Discover the Villa',
    'hero.scrollAria': 'Scroll down',
    'hero.scroll': 'Scroll',

    // Quick stats
    'stats.suites': 'Suites',
    'stats.people': 'Guests hosted',
    'stats.guests': 'Event guests',
    'stats.olive': 'Olive grove',

    // Pillars
    'pillars.kicker': 'Three Ways to Experience Dar Aïcha',
    'pillars.h2': 'Stay, celebrate or discover our terroir',
    'pillars.lede': 'A unique property to explore at your own pace: exclusive seasonal rental, welcoming guesthouse or immersion in our olive oil production.',
    'pillars.img1': 'Infinity pool at Villa Dar Aïcha with sun loungers and open views',
    'pillars.img2': 'Wedding reception held by the pool at Dar Aïcha, bright white décor at dusk',
    'pillars.img3': "Bottles of Domaine Dar Aïcha olive oil, harvested from the property's Koroneiki grove",
    'pillars.tag1': 'Stay & Rental',
    'pillars.tag2': 'Events',
    'pillars.tag3': 'Our Brand',
    'pillars.h3-1': 'Staying at the villa',
    'pillars.h3-2': 'Events & weddings',
    'pillars.h3-3': 'Domaine Dar Aïcha',
    'pillars.p1': 'Seasonal rental or guesthouse depending on the season, for up to 25 guests.',
    'pillars.p2': 'Up to 250 guests for your weddings, engagements and private parties.',
    'pillars.p3': 'Extra virgin Koroneiki olive oil, harvested and pressed on our estate in Tazarka.',

    // Villa
    'villa.kicker': 'The Villa',
    'villa.h2': 'White architecture blending Tunis tradition with contemporary lines',
    'villa.lede': 'Built on a 4-hectare agricultural estate, Dar Aïcha combines the Tunis arch, local stone and modern comfort. Nine suites, generous living spaces and an infinity pool facing the horizon.',
    'villa.img1': 'Front view of Villa Dar Aïcha, white façade with golden stone and paved driveway',
    'villa.img2': 'Infinity pool with parasols overlooking the Tazarka countryside',
    'villa.img3': 'Spacious lounge with colorful Berber rugs and cushions, large glass windows',
    'villa.img4': 'Interior patio with Tunis-style arch and zellige fountain',
    'villa.img5': 'Aerial view of the Dar Aïcha property, villa surrounded by gardens and olive trees',
    'villa.img6': 'Hssin suite with double bed and traditional Tunisian craftsmanship',
    'villa.img7': 'Bathroom in traditional blue Tunisian zellige tile',
    'villa.img8': 'Dining room able to seat a large number of guests',

    // Suites
    'suites.kicker': 'Accommodation',
    'suites.h2': '9 suites, a unique offering',
    'suites.lede': 'Five ground-floor suites and four upstairs suites, all air-conditioned, with private bathroom and Tunisian craft décor — kilims, zellige, turned wood. Same rate regardless of suite location.',
    'suites.img1': 'Suite at Villa Dar Aïcha, double bed and white linens',
    'suites.img2': 'Hssin Suite at Villa Dar Aïcha, warm ambiance and local craftsmanship',
    'suites.h3-1': 'One Suite',
    'suites.h3-2': 'Renting the Entire Villa',
    'suites.p1': '9 air-conditioned suites with private bathroom, on the garden level or upstairs with access to the panoramic terrace.',
    'suites.p2': 'Privatize all 9 suites for a family or friends getaway, for up to 25 guests.',
    'suites.price1b': 'From 255 TND',
    'suites.price1s': '/ night, per suite (≈ €75)',
    'suites.price2b': 'On request',
    'suites.price2s': 'direct rate, no platform commission',

    // Amenities
    'amenities.kicker': 'Amenities',
    'amenities.h2': 'All the comfort of a large Mediterranean home',
    'amenities.a1': 'Infinity pool',
    'amenities.a2': '11 bathrooms',
    'amenities.a3': 'Equipped kitchen',
    'amenities.a4': 'High-speed Wi-Fi',
    'amenities.a5': 'Air conditioning',
    'amenities.a6': 'Private parking',
    'amenities.a7': 'Garden & olive grove',
    'amenities.a8': 'Ponies, poultry & sheep',
    'amenities.a9': 'Outdoor kitchen & BBQ bar',
    'amenities.a10': "Children's play area (swings)",
    'amenities.a11': 'Mini-bar & TV in every suite',

    // Espaces
    'espaces.kicker': 'Our Spaces',
    'espaces.h2': 'An outdoor kitchen with BBQ bar, lounges opening onto the patio',
    'espaces.lede': 'Beyond the suites, Dar Aïcha comes alive in its shared spaces: the outdoor kitchen with its bar counter and BBQ corner, the indoor kitchen opening fully onto the pool, majlis-style Tunis lounges, the central patio with its zellige fountain, and a swing corner for children by the pool.',
    'espaces.kicker2': 'Outdoor Kitchen & BBQ Bar',
    'espaces.h2b': 'The perfect spot for outdoor dining',
    'espaces.p1': 'Marble bar counter, matching table and a barbecue corner sheltered behind a wrought-iron screen: the outdoor kitchen extends the patio for grilling, aperitifs and family meals facing the olive grove.',
    'espaces.li1': 'Marble bar and matching outdoor table',
    'espaces.li2': 'Equipped barbecue corner, sink and storage',
    'espaces.li3': 'Open views over the countryside and olive grove',
    'espaces.imgFeature': 'Outdoor kitchen with marble bar and BBQ corner, overlooking the Tazarka countryside',
    'espaces.img1': 'Barbecue corner of the outdoor kitchen with grill, sink and wooden storage',
    'espaces.img2': 'Outdoor kitchen viewed from the bar, wrought-iron screen',
    'espaces.img3': 'Indoor kitchen fully open to the pool and terrace',
    'espaces.img4': 'Central granite kitchen island with 5-burner cooktop',
    'espaces.img5': 'Table set with traditional Tunisian ceramic tableware',
    'espaces.img6': 'Tunis-style majlis lounge with low benches, Berber cushions and large bay windows',
    'espaces.img7': 'Lounge opening onto the kitchen through a large bay window',
    'espaces.img8': 'Large lounge with colorful Berber rugs and armchairs, marble floor',
    'espaces.img9': 'Lounge with beige benches, embroidered cushions and sheer curtains',
    'espaces.img10': 'Central vaulted patio with marble fountain and artisanal chandelier',
    'espaces.img11': 'Tiered patio fountain, view through the arches down to the sea',
    'espaces.img12': 'Patio and shaded outdoor dining area, stone colonnades',
    'espaces.img13': 'Swing corner for children by the pool, surrounded by palm trees and gardens',
    'espaces.img14': 'Swing set and play structure for children near the infinity pool',

    // Sejourner
    'sejourner.kicker': 'Stay',
    'sejourner.h2': 'Seasonal rental in high season, guesthouse the rest of the year',
    'sejourner.img': 'Terrace and pool at Dar Aïcha, calm low-season atmosphere, loungers by the water',
    'sejourner.p': "From June to September, Dar Aïcha is booked as an exclusive seasonal rental — the whole villa for your group. In low season, the villa operates as a guesthouse: book one or several suites, with breakfast and access to shared spaces.",
    'sejourner.li1': 'Full seasonal rental in high season (June–September)',
    'sejourner.li2': 'Booking by suite as a guesthouse the rest of the year',
    'sejourner.li3': 'Check-in from 3pm, check-out at 11am',
    'sejourner.li4': 'On-site contact: Fatma, the house host',
    'sejourner.cta': 'Check Availability',

    // Evenements
    'evenements.kicker': 'Events & Receptions',
    'evenements.h2': 'Weddings, engagements and private parties for up to 250 guests',
    'evenements.lede': 'The Dar Aïcha estate transforms for your special occasions: ceremonies by the infinity pool, garden receptions, evenings under the olive trees. Large private parking and a dedicated security team throughout the event.',
    'evenements.img1': 'Wedding reception by the Dar Aïcha pool with a lit heart-shaped display',
    'evenements.img2': 'Pool area set up for an event, beige loungers and parasols',
    'evenements.img3': 'Villa Dar Aïcha lit up in the evening for an event',
    'evenements.img4': 'Aerial view of the pool terrace arranged as a white lounge for a reception',
    'evenements.card1h': 'Up to 250 guests',
    'evenements.card1p': 'Capacity for a seated dinner reception. Large private parking and security team included.',
    'evenements.card2h': 'From 3,500 to 5,500 TND',
    'evenements.card2p': 'Full estate privatization: from 3,500 TND in low season, up to 5,500 TND in high season — custom quote based on your needs.',
    'evenements.card3h': 'Tailor-made organization',
    'evenements.card3p': "Support with catering, décor and accommodating guests in the villa's suites.",
    'evenements.cta': 'Request an Event Quote',

    // Privatisation
    'priv.kicker': 'Group Stays',
    'priv.h2': 'Privatize Dar Aïcha for your retreat, workshop or seminar',
    'priv.lede': 'Dar Aïcha can be privatized entirely for your group for the duration of your stay: no other guests, no shared spaces. Nine suites, a large lounge, an equipped kitchen, a patio, an infinity pool and a 4-hectare olive grove are yours alone — the ideal setting for a wellness retreat, an olive-oil themed stay, a creative workshop or a corporate seminar.',
    'priv.imgAlt': 'Aerial view of the Dar Aïcha property, ideal for a privatized group stay',
    'priv.theme1h': 'Wellness & Yoga Retreats',
    'priv.theme1p': 'The patio, garden and olive grove offer several natural settings for your yoga, meditation or breathing sessions. Our team adapts to your schedule: meal times, special diets, quiet hours.',
    'priv.theme2h': 'Olive-Oil Themed Stay',
    'priv.theme2p': "Sleep right in the heart of the olive grove that produces the oil you'll taste. Harvest, estate tour, pressing and tasting of Koroneiki oil — a 5 to 7 night format, ideal in low season (mid-October to January).",
    'priv.theme3h': 'Creative Workshops',
    'priv.theme3p': 'Cap Bon light, olive grove lines, infinity pool blue: an inspiring setting for a painting, photography or writing residency workshop.',
    'priv.theme4h': 'Corporate Seminars',
    'priv.theme4p': 'A setting conducive to strategic thinking and team building, away from urban bustle — workshops, group activities and dinner prepared by an on-site chef.',
    'priv.inclusKicker': "What's Included",
    'priv.inclusH2': 'The whole villa, just for you',
    'priv.inc1': 'Full exclusivity of the villa and its outdoor spaces (patio, garden, pool, olive grove)',
    'priv.inc2': 'All 9 suites with private bathroom',
    'priv.inc3': 'The fully equipped kitchen, usable by your own caterer or our partner chef',
    'priv.inc4': 'Access to the 4-hectare olive grove for your outdoor activities',
    'priv.inc5': 'Secure parking and a dedicated on-site contact',
    'priv.options': 'Optional: full or half board with a private chef, Koroneiki olive oil tasting workshop, airport transfers (Tunis-Carthage / Enfidha-Hammamet), Cap Bon excursions, local guest experts.',
    'priv.pricingKicker': 'Packages & Rates',
    'priv.pricingH2': 'Base rate: 2,600 TND per night (≈ €765)',
    'priv.pricingLede': "For the entire villa, up to 20 guests, accommodation and breakfast included (beyond that: +120 TND/night per additional guest, up to 25). One spot is offered to the group's instructor or organizer. A detailed quote is sent within 24 to 48 hours.",
    'priv.tier1h': 'Discovery',
    'priv.tier1nights': '3 to 4 nights',
    'priv.tier1price': '/ night (≈ €765)',
    'priv.tier1desc': 'Accommodation + breakfast',
    'priv.tier2h': 'Immersion',
    'priv.tier2nights': '5 to 6 nights · −10%',
    'priv.tier2price': '/ night (≈ €690)',
    'priv.tier2desc': 'Accommodation + breakfast, easy access to estate activities',
    'priv.tier3h': 'Extended Stay',
    'priv.tier3nights': '7 nights and more · −15%',
    'priv.tier3price': '/ night (≈ €650)',
    'priv.tier3desc': 'Best suited for retreats and olive-oil themed stays; full board available',
    'priv.restauration': '30% deposit at booking; 3-night minimum for any privatization. Optional catering: half board 100 to 120 TND/person/night, full board with on-site chef 150 to 180 TND/person/night.',
    'priv.faqKicker': 'Frequently Asked Questions',
    'priv.faqH2': 'Everything about privatization',
    'priv.faq1q': 'What is the minimum number of participants to privatize the villa?',
    'priv.faq1a': 'Privatization is available from 10 participants, up to 25 people for accommodation. For smaller groups, contact us — a solution can be arranged.',
    'priv.faq2q': 'Can we hold yoga classes, workshops or activities in the garden or olive grove?',
    'priv.faq2a': 'Yes, the garden, patio and olive grove are freely accessible for your sessions and activities. We can also connect your group with local practitioners (yoga, Tunisian cooking, crafts, olive oil tasting).',
    'priv.faq3q': 'Is catering available on site?',
    'priv.faq3a': 'The kitchen is fully equipped and can be used by your own caterer or chef. We also offer, as an option, a partner chef for full or half board, as well as Koroneiki olive oil tasting workshops from the estate.',
    'priv.faq4q': 'What is the best time for an olive-oil themed stay?',
    'priv.faq4a': 'The olive harvest runs from mid-October to the end of January — this is also our low season, ideal for privatizing the villa at favorable rates.',
    'priv.faq5q': 'Do you offer airport transfers?',
    'priv.faq5a': 'Yes, as an option, from Tunis-Carthage and Enfidha-Hammamet airports.',
    'priv.finalCta': 'Request a Privatization Quote',

    // Huile d'olive
    'huile.logoAlt': 'Domaine Dar Aïcha logo - Tazarka, Tunisia',
    'huile.kicker': 'Our Brand',
    'huile.h2': 'Domaine Dar Aïcha — Extra Virgin Olive Oil',
    'huile.lede': 'Born from our 4 hectares of Koroneiki olive trees in Tazarka, our extra virgin olive oil is hand-picked and cold-pressed to preserve the full richness of its aromas. 2024 vintage, packaged in 500ml and 250ml bottles under our own brand.',
    'huile.imgAlt1': 'Bottles of Domaine Dar Aïcha olive oil, 250ml and 500ml formats, at sunset on the Tazarka estate',
    'huile.kicker2': 'An Exceptional Oil',
    'huile.h2b': 'A premium product, from field to bottle',
    'huile.p1': "Every bottle carries the mark of our terroir: Koroneiki olives picked at peak ripeness, first cold pressing within 24 hours, no additives. The result: a fine, fruity, slightly peppery oil, true to the estate's family know-how.",
    'huile.li1': 'Extra virgin olive oil, Koroneiki variety',
    'huile.li2': 'First cold pressing, hand-picked',
    'huile.li3': '2024 vintage — available in 500ml and 250ml',
    'huile.li4': 'Produced and bottled in Tunisia',
    'huile.cta1': 'Order Our Olive Oil',
    'huile.imgAlt2': "Panoramic view of the estate's Koroneiki olive grove with the Mediterranean Sea in the background",
    'huile.kicker3': 'Terroir & Production',
    'huile.h2c': '4 hectares of Koroneiki olive trees facing the sea',
    'huile.p2': 'On our agricultural estate in Tazarka, a Koroneiki olive grove — a Greek cultivar renowned for its fine, aromatic oil — stretches between the estate and the coastline. A family production, crafted for a distinctive extra virgin olive oil.',
    'huile.li5': 'Koroneiki variety, renowned for its aromatic richness',
    'huile.li6': '4 hectares cultivated on the Tazarka estate',
    'huile.li7': 'Harvest and pressing overseen by the family',
    'huile.kicker4': 'From Olive Tree to Bottle',
    'huile.h2d': 'Our Process',
    'huile.step1h': 'Cultivation',
    'huile.step1p': 'Year-round care of the Koroneiki olive trees on our 4 hectares facing the sea.',
    'huile.step2h': 'Harvest',
    'huile.step2p': 'Olives picked at peak ripeness to preserve their aromas.',
    'huile.step3h': 'Pressing',
    'huile.step3p': 'Cold extraction for a high-quality extra virgin oil.',
    'huile.step4h': 'Bottling',
    'huile.step4p': 'Carefully packaged under our own brand, available on request from the estate.',
    'huile.kicker5': 'Domaine Dar Aïcha in Pictures',
    'huile.h2e': 'Our Oil, Showcased',
    'huile.img1': "Close-up of a bottle of Domaine Dar Aïcha olive oil, label featuring the estate's logo",
    'huile.videoAria': 'Presentation video of the Domaine Dar Aïcha olive oil range, 500ml and 250ml formats',
    'huile.img2': 'Domaine Dar Aïcha olive oil served at the table with a tomato and mozzarella salad',

    // Region
    'region.kicker': 'The Property & the Region',
    'region.h2': 'Tazarka, between Cap Bon beaches and Nabeul countryside',
    'region.lede': 'The property spans 4 hectares in Tazarka, near the beaches of Maamoura and Nabeul, in the Nabeul governorate (Cap Bon).',
    'region.img1': 'Aerial view of the 4-hectare property in Tazarka with the villa, olive grove and gardens',
    'region.img2': 'Back garden of the property overlooking the olive grove and coastline',
    'region.img3': 'Mediterranean gardens at the Dar Aïcha property',
    'region.img4': 'Palm-lined driveway leading to the villa',
    'region.img5': "Wide view of the villa's façade surrounded by palm trees",
    'region.img6': 'Fine sandy beach and turquoise waters near Tazarka',

    // Avis
    'avis.kicker': 'Reviews & Testimonials',
    'avis.h2': 'The trust of our travelers',
    'avis.r1': 'Airbnb · Superhost',
    'avis.r2': 'Vrbo — "Wonderful"',
    'avis.r3': 'Abritel — "Wonderful"',
    'avis.disclaimer1': 'Ratings verified by booking platforms, viewable directly on',
    'avis.disclaimer2': 'and',

    // Reserver
    'reserver.kicker': 'Book',
    'reserver.h2': 'Request a Quote or Check Availability',
    'reserver.lede': "A stay, a group of friends or an event — describe your plans and we'll get back to you quickly via WhatsApp or email.",
    'reserver.labelNom': 'Full Name',
    'reserver.labelArrivee': 'Arrival Date',
    'reserver.labelDepart': 'Departure Date',
    'reserver.labelVoyageurs': 'Number of Guests',
    'reserver.labelType': 'Request Type',
    'reserver.opt1': 'Stay / Seasonal Rental',
    'reserver.opt2': 'Guesthouse (one suite)',
    'reserver.opt3': 'Event / Reception',
    'reserver.opt4': 'Privatization / Group Stay',
    'reserver.opt5': 'Koroneiki Olive Oil',
    'reserver.labelMessage': 'Your Message',
    'reserver.submit': 'Send via WhatsApp',
    'reserver.coordH3': 'Contact Details',
    'reserver.contact1': 'Reservations (Fatma, house host):',
    'reserver.contact3': 'Tazarka, Korba, Nabeul Governorate, Tunisia',

    // Contact
    'contact.kicker': 'Find Us',
    'contact.h2': 'Tazarka, Korba — Nabeul Governorate',
    'contact.mapTitle': 'Location of Dar Aïcha in Tazarka, Korba, Tunisia',

    // Footer
    'footer.blurb': 'A 9-suite villa, Koroneiki olive grove and private events in Tazarka, Cap Bon, Tunisia.',
    'footer.explorerH4': 'Explore',
    'footer.infosH4': 'Information',
    'footer.contactH4': 'Contact',
    'footer.copyright2': 'Dar Aïcha Tazarka. All rights reserved.',
    'footer.credit': 'Site designed for Dar Aïcha — Mohcen Ben Amara',

    // Misc
    'whatsapp.aria': 'Contact Dar Aïcha on WhatsApp',
    'lightbox.closeAria': 'Close'
  };

  var STORAGE_KEY = 'siteLang';
  var toggleBtn = document.querySelector('[data-lang-toggle]');

  function applyLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (el.dataset.frText === undefined) el.dataset.frText = el.textContent;
      el.textContent = lang === 'en' && EN[key] !== undefined ? EN[key] : el.dataset.frText;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (el.dataset.frAlt === undefined) el.dataset.frAlt = el.getAttribute('alt') || '';
      el.setAttribute('alt', lang === 'en' && EN[key] !== undefined ? EN[key] : el.dataset.frAlt);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (el.dataset.frAria === undefined) el.dataset.frAria = el.getAttribute('aria-label') || '';
      el.setAttribute('aria-label', lang === 'en' && EN[key] !== undefined ? EN[key] : el.dataset.frAria);
    });
    document.querySelectorAll('[data-i18n-attr-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-attr-title');
      if (el.dataset.frTitle === undefined) el.dataset.frTitle = el.getAttribute('title') || '';
      el.setAttribute('title', lang === 'en' && EN[key] !== undefined ? EN[key] : el.dataset.frTitle);
    });

    document.documentElement.setAttribute('lang', lang);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}

    if (toggleBtn) {
      toggleBtn.textContent = lang === 'fr' ? 'EN' : 'FR';
      toggleBtn.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Passer en français');
      toggleBtn.setAttribute('data-current-lang', lang);
    }
  }

  var saved = 'fr';
  try { saved = localStorage.getItem(STORAGE_KEY) || 'fr'; } catch (e) {}
  applyLang(saved);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      var current = toggleBtn.getAttribute('data-current-lang') || 'fr';
      applyLang(current === 'fr' ? 'en' : 'fr');
    });
  }
})();
// script.js — Dar Aïcha Tazarka

// ---------- Theme toggle ----------
(function () {
  const t = document.querySelector('[data-theme-toggle]');
  const r = document.documentElement;
  let d = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
  r.setAttribute('data-theme', d);
  updateIcon();
  t &&
    t.addEventListener('click', () => {
      d = d === 'dark' ? 'light' : 'dark';
      r.setAttribute('data-theme', d);
      updateIcon();
    });
  function updateIcon() {
    if (!t) return;
    t.setAttribute('aria-label', 'Passer en mode ' + (d === 'dark' ? 'clair' : 'sombre'));
    t.innerHTML =
      d === 'dark'
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
})();

// ---------- Mobile nav ----------
(function () {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-main-nav]');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
})();

// ---------- Scroll reveal ----------
(function () {
  const els = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  els.forEach((el) => io.observe(el));
})();

// ---------- Lightbox ----------
(function () {
  const lightbox = document.querySelector('[data-lightbox]');
  if (!lightbox) return;
  const img = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('[data-lightbox-close]');
  document.querySelectorAll('[data-lightbox-trigger]').forEach((el) => {
    el.addEventListener('click', () => {
      const src = el.getAttribute('data-full') || el.src;
      img.src = src;
      img.alt = el.alt || '';
      lightbox.classList.add('is-open');
    });
  });
  function close() {
    lightbox.classList.remove('is-open');
    img.src = '';
  }
  closeBtn && closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
})();

// ---------- Booking form (no backend — mailto/WhatsApp handoff) ----------
(function () {
  const form = document.querySelector('[data-booking-form]');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const nom = data.get('nom') || '';
    const arrivee = data.get('arrivee') || '';
    const depart = data.get('depart') || '';
    const voyageurs = data.get('voyageurs') || '';
    const message = data.get('message') || '';
    const type = data.get('type') || 'Séjour';
    const text = encodeURIComponent(
      `Bonjour, je suis ${nom}. Je souhaite une demande de devis pour : ${type}.\nArrivée : ${arrivee}\nDépart : ${depart}\nNombre de personnes : ${voyageurs}\nMessage : ${message}`
    );
    window.open(`https://wa.me/68987717863?text=${text}`, '_blank');
  });
})();

// ---------- Current year ----------
(function () {
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();

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
    'lightbox.closeAria': 'Close',

    // Homepage cross-link CTAs (index.html)
    'homeMore.villa': 'Discover the villa and its 9 suites in detail',
    'homeMore.espaces': 'Explore all our living spaces',
    'homeMore.sejourner': 'Everything about seasonal rental in Cap Bon',
    'homeMore.evenements': 'Plan your wedding or event in Tazarka',
    'homeMore.huile': 'Discover our Koroneiki olive oil',
    'homeMore.region': 'Discover the Cap Bon region',

    // Breadcrumb (shared)
    'breadcrumb.home': 'Home',

    // Footer (shared, missing key)
    'footer.copyright1': '©',

    // Villa page (villa.html)
    'villaPage.breadcrumb': 'The Villa & Suites',
    'villaPage.badge1': '9 en-suite bedrooms',
    'villaPage.badge2': 'Contemporary Tunisian architecture',
    'villaPage.badge3': 'Infinity pool',
    'villaPage.h1': 'The Villa & its 9 Suites',
    'villaPage.lede': 'Discover Dar Aïcha\'s architecture and its 9 individually decorated en-suite bedrooms, between contemporary lines, local stone and traditional Tunisian craftsmanship.',
    'villaPage.cta1': 'Check Availability',
    'villaPage.archKicker': 'Architecture',
    'villaPage.archH2': 'A contemporary villa rooted in local craftsmanship',
    'villaPage.archLede': 'Dar Aïcha combines clean, contemporary lines with local stone, an engraved pediment and Mediterranean gardens — a villa designed to host families and events on a 4-hectare property in Tazarka.',
    'villaPage.img1': 'Facade of Villa Dar Aïcha, contemporary white architecture with local stone and Mediterranean garden',
    'villaPage.img2': 'Entrance driveway of Villa Dar Aïcha lined with palm trees',
    'villaPage.img3': 'Engraved pediment above the entrance of Villa Dar Aïcha',
    'villaPage.img4': 'Facade of the villa illuminated at night',
    'villaPage.img5': 'Aerial view of the Dar Aïcha property, villa surrounded by gardens and olive trees',
    'villaPage.img6': 'Outdoor stone staircase leading to the upstairs suites',
    'villaPage.img7': 'Entrance arch of Villa Dar Aïcha, carved golden stone',
    'villaPage.img8': 'Mediterranean garden bordering the villa\'s facade',
    'villaPage.suitesKicker': '9 Suites',
    'villaPage.suitesH2': 'Individually decorated en-suite bedrooms',
    'villaPage.suitesLede': 'Each of the 9 suites has its own decor blending contemporary comfort with traditional Tunisian craftsmanship, plus a private bathroom.',
    'villaPage.priceUnit': 'per night',
    'villaPage.suite1h': 'Suite Yasmine',
    'villaPage.suite1img': 'Suite Yasmine with double bed and traditional Tunisian décor',
    'villaPage.suite1p': 'A bright suite with private bathroom, decorated with ceramics and local craftsmanship.',
    'villaPage.suite2h': 'Suite Zeitoun',
    'villaPage.suite2img': 'Suite Zeitoun, olive-tree themed décor and private bathroom',
    'villaPage.suite2p': 'Named after the olive tree, this suite opens onto the gardens and offers a private bathroom.',
    'villaPage.suite3h': 'Suite Jasmin',
    'villaPage.suite3img': 'Suite Jasmin with traditional bed linens and private bathroom',
    'villaPage.suite3p': 'A cosy suite with traditional textiles and a private bathroom.',
    'villaPage.suite4h': 'Suite Nour',
    'villaPage.suite4img': 'Suite Nour, bright bedroom with private bathroom',
    'villaPage.suite4p': 'A bright, restful suite with a private bathroom.',
    'villaPage.suite5h': 'Suite Amel',
    'villaPage.suite5img': 'Suite Amel with private bathroom and traditional décor',
    'villaPage.suite5p': 'A calm suite decorated with local craftsmanship, with a private bathroom.',
    'villaPage.suite6h': 'Suite Hssin',
    'villaPage.suite6img': 'Suite Hssin with double bed and traditional Tunisian décor',
    'villaPage.suite6p': 'A double bedroom with private bathroom, decorated in traditional Tunisian style.',
    'villaPage.suite7h': 'Suite Salma',
    'villaPage.suite7img': 'Suite Salma, bedroom with private bathroom',
    'villaPage.suite7p': 'A comfortable suite with private bathroom, ideal for a couple.',
    'villaPage.suite8h': 'Suite Rym',
    'villaPage.suite8img': 'Suite Rym with private bathroom and local decorative details',
    'villaPage.suite8p': 'A quiet suite with a private bathroom and traditional decorative details.',
    'villaPage.suite9h': 'Suite Farah',
    'villaPage.suite9img': 'Suite Farah, bedroom with private bathroom',
    'villaPage.suite9p': 'The ninth suite, with private bathroom, completes the villa’s 9-bedroom capacity.',
    'villaPage.amKicker': 'Bedroom amenities',
    'villaPage.amH2': 'Comfort in every suite',
    'villaPage.am1': 'Private bathroom in every suite',
    'villaPage.am2': 'Air conditioning',
    'villaPage.am3': 'Fresh bed linens',
    'villaPage.am4': 'Individual decor with local craftsmanship',
    'villaPage.am5': 'Access to shared living spaces',
    'villaPage.am6': 'Garden or pool view depending on suite',
    'villaPage.am7': 'Housekeeping during your stay',
    'villaPage.am8': 'Personalised welcome by Fatma, house host',
    'villaPage.diningKicker': 'Dining room',
    'villaPage.diningH2': 'A dining room for shared meals',
    'villaPage.diningP': 'The villa’s dining room comfortably seats guests for shared meals, between family gatherings and private events.',
    'villaPage.diningImg': 'Dining room of Villa Dar Aïcha set for a shared meal',
    'villaPage.salonKicker': 'Living rooms',
    'villaPage.salonH2': 'Majlis-style living rooms',
    'villaPage.salonP': 'Low seating, Berber cushions and traditional rugs: the villa’s living rooms reflect the codes of the Tunisois majlis for relaxed evenings.',
    'villaPage.salonImg': 'Majlis-style living room with low seating and Berber cushions',
    'villaPage.salonLink': 'Discover our other spaces',
    'villaPage.info1h': 'Capacity',
    'villaPage.info1p': '9 suites, up to 18-20 guests in guesthouse mode, or up to 25 guests for a full private rental.',
    'villaPage.info2h': 'Contact & arrival',
    'villaPage.info2p': 'Check-in from 3pm, check-out at 11am. On-site contact: Fatma, house host.',
    'villaPage.info3h': 'Location',
    'villaPage.info3p': 'Villa Dar Aïcha, Tazarka, Korba, Nabeul Governorate, Cap Bon, Tunisia.',
    'villaPage.ctaKicker': 'Book',
    'villaPage.ctaH2': 'Ready to discover Dar Aïcha?',
    'villaPage.ctaLede': 'Check availability for a suite or the whole villa, depending on the season.',
    'villaPage.cta2': 'Request a Quote',

    // Spaces page (espaces.html)
    'espacesPage.breadcrumb': 'Our Spaces',
    'espacesPage.badge1': 'Outdoor kitchen & BBQ bar',
    'espacesPage.badge2': 'Majlis living rooms',
    'espacesPage.badge3': 'Zellige-tiled patio',
    'espacesPage.h1': 'Our Spaces: Kitchen, Living Rooms, Patio & Play Area',
    'espacesPage.lede': 'Beyond the 9 suites, Dar Aïcha is also about its shared spaces — the outdoor kitchen with BBQ bar, the indoor kitchen, majlis-style living rooms, the zellige-tiled fountain patio and a swing corner for children.',
    'espacesPage.cta1': 'Request a Quote',
    'espacesPage.k1': 'Outdoor kitchen & BBQ bar',
    'espacesPage.h2_1': 'The perfect spot for al fresco meals',
    'espacesPage.p1': 'Marble bar counter, matching outdoor table, and a barbecue corner sheltered behind a wrought-iron screen: the outdoor kitchen extends the patio for grilling, drinks and family meals facing the olive grove.',
    'espacesPage.li1': 'Marble bar and matching outdoor table',
    'espacesPage.li2': 'Fully equipped barbecue corner, sink and storage',
    'espacesPage.li3': 'Open view over the countryside and olive grove',
    'espacesPage.img1': 'Outdoor kitchen with marble bar and BBQ corner, view over the Tazarka countryside',
    'espacesPage.img2': 'Barbecue corner of the outdoor kitchen with grill, sink and wooden storage',
    'espacesPage.img3': 'Outdoor kitchen viewed from the bar, wrought-iron screen',
    'espacesPage.k2': 'Indoor kitchen',
    'espacesPage.h2_2': 'A kitchen wide open onto the pool',
    'espacesPage.p2': 'Central granite island, 5-burner range and large glass doors opening onto the terrace and pool: the indoor kitchen is the welcoming heart of the villa, designed for cooking as a family while keeping a view outside.',
    'espacesPage.img4': 'Central granite kitchen island with 5-burner range',
    'espacesPage.img5': 'Indoor kitchen wide open onto the pool and terrace',
    'espacesPage.img6': 'Indoor kitchen of Villa Dar Aïcha, worktop and storage',
    'espacesPage.img7': 'Table set with traditional Tunisian ceramic tableware',
    'espacesPage.k3': 'Majlis-style living rooms',
    'espacesPage.h2_3': 'The art of hosting, Tunisois-style',
    'espacesPage.p3': 'Low seating, colourful Berber cushions and traditional rugs: Dar Aïcha’s living rooms follow the codes of the Tunisois majlis, for convivial evenings between sofas and large glass doors opening onto the patio.',
    'espacesPage.img8': 'Living room opening onto the kitchen through a large glass door',
    'espacesPage.img9': 'Tunisois-style majlis living room with low seating, Berber cushions and large glass doors',
    'espacesPage.img10': 'Living room with beige seating, embroidered cushions and sheer curtains',
    'espacesPage.img11': 'Large living room with colourful Berber rugs and armchairs, marble floor',
    'espacesPage.img12': 'Living room of Villa Dar Aïcha, traditional Tunisian craftsmanship',
    'espacesPage.k4': 'Central patio',
    'espacesPage.h2_4': 'A zellige-tiled fountain at the heart of the villa',
    'espacesPage.p4': 'The vaulted patio distributes the living spaces around a tiered zellige-tiled fountain, in the purest Tunisois tradition. Stone colonnades and a shaded dining corner make it a place to pass through and relax at any time of day.',
    'espacesPage.img13': 'Tiered fountain in the patio, arches lined up towards the sea',
    'espacesPage.img14': 'Vaulted central patio with marble fountain and handcrafted lantern',
    'espacesPage.img15': 'Patio and shaded outdoor dining corner, stone colonnades',
    'espacesPage.img16': 'Indoor patio with Tunisian archway and zellige-tiled fountain',
    'espacesPage.k5': 'Children’s play area',
    'espacesPage.h2_5': 'A swing corner by the pool',
    'espacesPage.p5': 'Designed for families, a play area with swings and a play frame is set up near the pool, among palm trees and gardens — so children can enjoy their stay at Dar Aïcha too.',
    'espacesPage.img17': 'Swing corner for children by the pool, surrounded by palm trees and gardens',
    'espacesPage.img18': 'Swing and play frame for children near the infinity pool',
    'espacesPage.img19': 'Infinity pool of Villa Dar Aïcha with loungers and open view',
    'espacesPage.img20': 'Backyard garden of the property with view over the olive grove and coast',
    'espacesPage.ctaKicker': 'Discover',
    'espacesPage.ctaH2': 'Want to see these spaces for yourself?',
    'espacesPage.ctaLede': 'Explore the villa’s architecture and its 9 suites, or request a quote directly for your stay.',
    'espacesPage.ctaBtn1': 'Discover the Villa',

    // Seasonal rental page (location-saisonniere-cap-bon.html)
    'locationPage.breadcrumb': 'Seasonal Rental & Guesthouse',
    'locationPage.badge1': '★ 4.88/5 · Airbnb Superhost',
    'locationPage.badge2': '9.0/10 · Vrbo & Abritel',
    'locationPage.badge3': 'Guesthouse · Cap Bon',
    'locationPage.h1': 'Guesthouse & Seasonal Rental in Cap Bon, Tazarka',
    'locationPage.lede': 'Dar Aïcha can be booked by the suite as a guesthouse throughout the year, or in full for the high season — a 9-suite villa between Nabeul and Korba, in the Cap Bon governorate.',
    'locationPage.cta1': 'Check Availability',
    'locationPage.k1': 'Two ways to stay',
    'locationPage.h2_1': 'Guesthouse in low season, seasonal rental in high season',
    'locationPage.lede2': 'From June to September, Dar Aïcha is booked as an exclusive seasonal rental — the whole villa for your group. In low season, the villa operates as a guesthouse: book one or more suites, with access to the shared spaces.',
    'locationPage.card1h': 'Guesthouse (low season)',
    'locationPage.card1p': 'Booking by the suite, from 255 TND per night (≈ €75). Access to the living rooms, outdoor kitchen, patio and pool.',
    'locationPage.card2h': 'Seasonal rental (high season)',
    'locationPage.card2p': 'Full privatisation of the 9 suites, June to September, up to 25 guests — direct quote-based pricing, no platform commission.',
    'locationPage.card3h': 'Contact & arrival',
    'locationPage.card3p': 'Check-in from 3pm, check-out at 11am. On-site contact: Fatma, house host — ',
    'locationPage.k2': 'Why choose Dar Aïcha',
    'locationPage.h2_2': 'A rare address in Cap Bon',
    'locationPage.img1': 'Infinity pool of Villa Dar Aïcha, serene atmosphere facing the Tazarka countryside',
    'locationPage.p1': 'Unlike a standard hotel, Dar Aïcha offers the privacy of a large private home: 9 air-conditioned suites, generous shared spaces (outdoor kitchen, majlis living rooms, patio), an infinity pool and 4 hectares of gardens and olive grove, just minutes from the beaches of Nabeul and Maamoura.',
    'locationPage.li1': 'Air-conditioned suites with private bathroom',
    'locationPage.li2': 'Infinity pool, gardens and 4-hectare olive grove',
    'locationPage.li3': 'Close to the beaches of Nabeul and Maamoura, in Cap Bon',
    'locationPage.li4': 'Personalised welcome by Fatma, house host',
    'locationPage.link1': 'Discover the villa and its suites',
    'locationPage.k3': 'In pictures',
    'locationPage.h2_3': 'The atmosphere of a stay at Dar Aïcha',
    'locationPage.img2': 'Infinity pool with parasols and view over the Tazarka countryside',
    'locationPage.img3': 'Suite Hssin with double bed and traditional Tunisian décor',
    'locationPage.img4': 'Private bathroom of one of the suites at Villa Dar Aïcha',
    'locationPage.img5': 'Loungers and parasols by the pool at Dar Aïcha',
    'locationPage.img6': 'Wide view of the villa’s facade surrounded by palm trees',
    'locationPage.img7': 'Bathroom with traditional Tunisian blue zellige tiling',
    'locationPage.k4': 'Verified reviews',
    'locationPage.h2_4': 'The trust of our guests',
    'locationPage.rating1': 'Airbnb · Superhost',
    'locationPage.rating2': 'Vrbo — “Wonderful”',
    'locationPage.rating3': 'Abritel — “Wonderful”',
    'locationPage.ctaKicker': 'Book',
    'locationPage.ctaH2': 'Check availability for your stay',
    'locationPage.ctaLede': 'A suite, a group of friends, or the whole villa — describe your project and we’ll get back to you quickly on WhatsApp or by email.',
    'locationPage.ctaBtn': 'Request Availability',

    // Events page (mariages-evenements-tazarka.html)
    'evenementsPage.breadcrumb': 'Weddings & Events',
    'evenementsPage.badge1': 'Up to 250 guests',
    'evenementsPage.badge2': 'Pool & 4-hectare gardens',
    'evenementsPage.badge3': 'Tazarka · Cap Bon',
    'evenementsPage.h1': 'Weddings & Private Events in Tazarka, Cap Bon',
    'evenementsPage.lede': 'A 4-hectare property between olive grove and sea to celebrate a wedding, an engagement or a corporate event, for up to 250 guests.',
    'evenementsPage.cta1': 'Request an Event Quote',
    'evenementsPage.k1': 'Capacity & pricing',
    'evenementsPage.h2_1': 'A property designed to host',
    'evenementsPage.lede2': 'From an intimate gathering to a large wedding, Dar Aïcha adapts its spaces — patio, gardens, pool terrace — to the size of your event.',
    'evenementsPage.card1h': 'Up to 250 guests',
    'evenementsPage.card1p': 'Gardens, patio and pool terrace can host a large-scale reception.',
    'evenementsPage.card2h': '3,500 — 5,500 TND',
    'evenementsPage.card2p': 'Rental rate for the event space, depending on the package chosen and the number of guests.',
    'evenementsPage.card3h': 'Custom quote',
    'evenementsPage.card3p': 'Every event is unique: contact us for a quote tailored to your date and format.',
    'evenementsPage.k2': 'Included services',
    'evenementsPage.h2_2': 'A turnkey setting for your reception',
    'evenementsPage.li1': 'Access to the gardens, patio and pool terrace',
    'evenementsPage.li2': 'Private parking on the property',
    'evenementsPage.li3': 'Night-time lighting of the facade and gardens',
    'evenementsPage.li4': 'Option to accommodate close family in the villa’s 9 suites',
    'evenementsPage.li5': 'Coordination with your vendors (caterer, decorator, photographer)',
    'evenementsPage.img1': 'Aerial view of the pool terrace set up for an event at Dar Aïcha',
    'evenementsPage.link1': 'Accommodate your guests in our 9 suites',
    'evenementsPage.k3': 'How it works',
    'evenementsPage.h2_3': 'Book your date in 3 steps',
    'evenementsPage.step1h': 'Contact & visit',
    'evenementsPage.step1p': 'Describe your project (date, number of guests, package wanted) and visit the property if possible.',
    'evenementsPage.step2h': 'Quote & confirmation',
    'evenementsPage.step2p': 'We prepare a custom quote and lock in your date once confirmed.',
    'evenementsPage.step3h': 'The big day',
    'evenementsPage.step3p': 'We prepare the spaces for your guests’ arrival and remain available throughout the event.',
    'evenementsPage.k4': 'In pictures',
    'evenementsPage.h2_4': 'Receptions with a Mediterranean décor',
    'evenementsPage.img2': 'Pool terrace set up with hanging parasols for a reception',
    'evenementsPage.img3': 'Poolside loggia set up for a private event',
    'evenementsPage.img4': 'Floral wedding décor on a backdrop of Tunisian ceramics',
    'evenementsPage.img5': 'Facade of Villa Dar Aïcha lit up for a night-time reception',
    'evenementsPage.img6': 'Wedding reception by the pool at Dar Aïcha',
    'evenementsPage.ctaKicker': 'Your event',
    'evenementsPage.ctaH2': 'Request your event quote',
    'evenementsPage.ctaLede': 'Wedding, engagement, birthday or corporate event — tell us about your project and the date you have in mind.',

    // Olive oil page (huile-olive-koroneiki.html)
    'huilePage.breadcrumb': 'Koroneiki Olive Oil',
    'huilePage.badge1': 'Koroneiki variety',
    'huilePage.badge2': '4 hectares · Tazarka',
    'huilePage.badge3': '2024 vintage',
    'huilePage.h1': 'Koroneiki Olive Oil from Domaine Dar Aïcha, Tazarka',
    'huilePage.lede': 'On the 4 hectares of the family property, we grow the Greek Koroneiki variety and produce a fine, fruity, slightly peppery oil, from the field to the bottle.',
    'huilePage.cta1': 'Contact Us to Order',
    'huilePage.k1': 'The terroir',
    'huilePage.h2_1': '4 hectares dedicated to the Koroneiki variety',
    'huilePage.img1': 'Panoramic view of the Koroneiki olive grove on the Tazarka agricultural property',
    'huilePage.p1': 'Chosen for its hardiness and the quality of its oil, Koroneiki — a Greek variety widely planted across the Mediterranean — thrives on our Tazarka property, between the coastal climate of Cap Bon and soil well suited to olive trees.',
    'huilePage.p2': 'Every step, from growing to bottling, is overseen on site to preserve the quality of the fruit.',
    'huilePage.k2': 'Our know-how',
    'huilePage.h2_2': 'From olive grove to bottle',
    'huilePage.step1h': 'Growing',
    'huilePage.step1p': 'Koroneiki olive trees grown on the property’s 4 hectares in Tazarka, with careful year-round maintenance.',
    'huilePage.step2h': 'Harvest',
    'huilePage.step2p': 'Olives harvested at the optimal ripeness to preserve fruity aromas and the quality of the oil.',
    'huilePage.step3h': 'Pressing',
    'huilePage.step3p': 'Cold pressing carried out quickly after the harvest, to preserve the oil’s organoleptic qualities.',
    'huilePage.step4h': 'Bottling',
    'huilePage.step4p': 'Packaged in 500ml and 250ml bottles, kept away from light, to preserve the product’s freshness.',
    'huilePage.k3': 'Our oil',
    'huilePage.h2_3': 'A fine, fruity, slightly peppery oil',
    'huilePage.img2': 'Close-up of a Koroneiki olive oil bottle from Domaine Dar Aïcha',
    'huilePage.p3': 'Domaine Dar Aïcha’s Koroneiki olive oil, 2024 vintage, stands out for its aromatic finesse and slight peppery kick on the finish — typical of this variety. Available in 500ml and 250ml bottles.',
    'huilePage.li1': 'Koroneiki variety, harvested and pressed on the property',
    'huilePage.li2': '2024 vintage',
    'huilePage.li3': '500ml and 250ml bottles',
    'huilePage.k4': 'In pictures',
    'huilePage.h2_4': 'Domaine Dar Aïcha, from the field to the finished product',
    'huilePage.img3': 'Bottle of Domaine Dar Aïcha olive oil displayed on a set table',
    'huilePage.img4': 'Logo of Domaine Dar Aïcha, Koroneiki olive oil',
    'huilePage.img5': 'Rows of Koroneiki olive trees on the Tazarka property',
    'huilePage.ctaKicker': 'Order',
    'huilePage.ctaH2': 'Want to taste our Koroneiki olive oil?',
    'huilePage.ctaLede': 'Contact us to find out availability and ordering details for Domaine Dar Aïcha’s oil.',
    'huilePage.cta2': 'Contact Us',

    // Region page (region-cap-bon.html)
    'regionPage.breadcrumb': 'Property & Region',
    'regionPage.badge1': 'Tazarka · Korba · Nabeul',
    'regionPage.badge2': 'Nabeul Governorate',
    'regionPage.badge3': 'Cap Bon, Tunisia',
    'regionPage.h1': 'Tazarka, at the Heart of Cap Bon',
    'regionPage.lede': 'Between Korba and Nabeul, just minutes from sandy beaches, Dar Aïcha enjoys a prime location in the Nabeul Governorate, also known as Cap Bon.',
    'regionPage.k1': 'Location',
    'regionPage.h2_1': 'Tazarka, a coastal village in Cap Bon',
    'regionPage.img1': 'Outdoor view of the Dar Aïcha property in Tazarka, between gardens and the Cap Bon countryside',
    'regionPage.p1a': 'Tazarka sits on a hillside, about twenty kilometres north of Nabeul, in an area known for its long sandy beaches (',
    'regionPage.p1b': '). The village administratively belongs to the delegation of Korba, in the Nabeul Governorate — the region historically known as “Cap Bon,” which also includes Hammamet, Kelibia, Menzel Temime, Soliman and the ancient site of Kerkouane, a UNESCO World Heritage Site (',
    'regionPage.p1c': ').',
    'regionPage.k2': 'Access',
    'regionPage.h2_2': 'How to reach Dar Aïcha',
    'regionPage.lede2': 'The property is accessible from the two main airports in north-eastern Tunisia.',
    'regionPage.card1h': 'Tunis-Carthage Airport',
    'regionPage.card1p': 'About 75 to 85 km, or 1h15 to 1h30 by road to Tazarka (',
    'regionPage.pClose': ').',
    'regionPage.card2h': 'Enfidha-Hammamet Airport',
    'regionPage.card2p': 'About 50 to 55 km from Nabeul, or roughly 40 minutes by road (',
    'regionPage.card3h': 'Nabeul',
    'regionPage.card3p': 'Capital of the governorate, about twenty kilometres from Tazarka, with its large market and pottery workshops.',
    'regionPage.k3': 'Things to discover',
    'regionPage.h2_3': 'Cap Bon, between sea, craftsmanship and heritage',
    'regionPage.card4h': 'Nabeul & its pottery',
    'regionPage.card4p': 'About 20 km away, Nabeul is known for its market and traditional ceramics and pottery workshops, roughly 1 hour from Tunis-Carthage Airport (',
    'regionPage.card5h': 'Hammamet',
    'regionPage.card5p': 'Cap Bon’s historic seaside resort, its medina and beaches lie just a few kilometres south of Nabeul (',
    'regionPage.card6h': 'Kelibia & Kerkouane',
    'regionPage.card6p': 'Further north, Kelibia (about 55 km from Nabeul) and the ancient Punic site of Kerkouane, a UNESCO World Heritage Site, round out the discovery of Cap Bon (',
    'regionPage.k4': 'Our property',
    'regionPage.h2_4': '4 hectares between olive grove, gardens and villa',
    'regionPage.img2': 'Aerial view of the Dar Aïcha property in Tazarka, villa surrounded by gardens and olive trees',
    'regionPage.img3': 'Palm tree-lined driveway leading to Villa Dar Aïcha',
    'regionPage.img4': 'Outdoor view of the property with Mediterranean gardens',
    'regionPage.img5': 'Backyard garden of the property facing the olive grove and coast',
    'regionPage.k5': 'Location',
    'regionPage.h2_5': 'Tazarka, Korba, Nabeul Governorate',
    'regionPage.ctaKicker': 'Join Us',
    'regionPage.ctaH2': 'Ready to discover Cap Bon from Dar Aïcha?',
    'regionPage.ctaLede': 'A stay, a private reception, or simply a visit to the property — contact us to arrange your visit.',
    'regionPage.cta1': 'Contact Us',
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

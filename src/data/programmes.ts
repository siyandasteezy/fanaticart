export type Programme = {
  slug: string;
  eyebrow: string;
  title: string;
  lede: string;
  points: string[];
  photo: string;
  cta: { label: string; href: string };
};

export const programmes: Programme[] = [
  {
    slug: 'youth',
    eyebrow: 'Children & Youth',
    title: 'Start early. Build properly.',
    lede:
      'Play-based, arts-integrated learning for the foundation and primary phase, moving into structured performance and early technical skill through high school.',
    points: [
      'Music, drama, dance, visual creativity and stage confidence',
      'Assessment through participation, portfolio and performance — not heavy formal exams',
    ],
    photo: 'prog-youth',
    cta: { label: 'Programme detail', href: '/programmes/#youth' },
  },
  {
    slug: 'adults',
    eyebrow: 'Adults & Emerging Creatives',
    title: 'It is not too late to be serious about it.',
    lede:
      'Post-school learners, working professionals and career changers — training toward industry readiness, teaching capability or your own creative business.',
    points: [
      'Full-scale productions and studio work',
      'Arts business, consultation and entrepreneurship',
      'Teaching qualification under the Mpanziq syllabus',
      'Career mentorship, content creation and publishing',
    ],
    photo: 'prog-adult',
    cta: { label: 'Programme detail', href: '/programmes/#adults' },
  },
  {
    slug: 'institutions',
    eyebrow: 'Schools, Churches & Organisations',
    title: 'Bring the programme to your people.',
    lede:
      'Extracurricular and enrichment programmes delivered on site — for schools needing arts provision, and for churches and community institutions building creative capacity.',
    points: [
      'Curriculum-aligned enrichment and extracurricular delivery',
      'Worship, technical and media team training',
      'Workshops, showcases and full production support',
      'Long-term partnership rather than one-off visits',
    ],
    photo: 'prog-institutions',
    cta: { label: 'Start a conversation', href: '/contact/' },
  },
];

export const pricing = {
  note: 'Pricing reflects professional instruction, personalised development and access to specialised training environments.',
  tiers: [
    {
      title: 'Individual (private) lessons',
      unit: 'per lesson',
      rows: [
        { label: '30 minutes', price: 'R650' },
        { label: '60 minutes', price: 'R700' },
      ],
    },
    {
      title: 'Group lessons',
      unit: 'per child',
      rows: [
        { label: '30 minutes', price: 'R500' },
        { label: '60 minutes', price: 'R550' },
      ],
    },
  ],
};

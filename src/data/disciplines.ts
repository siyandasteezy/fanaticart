export type Discipline = {
  slug: string;
  index: string;
  name: string;
  short: string;
  lede: string;
  /** Detail-section photograph. */
  photo: string;
  /** Panel-band photograph. Must differ from `photo` — both appear on /disciplines. */
  panelPhoto: string;
  learn: string[];
  outcomes: string[];
};

export const disciplines: Discipline[] = [
  {
    slug: 'music',
    index: '01',
    name: 'Music',
    short: 'Voice, instrument, ensemble.',
    lede:
      'From first rhythm to full band. Vocal development, instrumental training, theory and the discipline of playing together.',
    photo: 'music',
    panelPhoto: 'hero-vertical-singer',
    learn: [
      'Vocal development — pitch, tone, breathing',
      'Instrumental training, including marimba and band instruments',
      'Music theory from basic to intermediate',
      'Ensemble and band performance',
      'Live performance and recording experience',
    ],
    outcomes: [
      'Technical musical skill',
      'Ensemble discipline and teamwork',
      'Stage and studio readiness',
      'Confidence in creative composition',
    ],
  },
  {
    slug: 'dance',
    index: '02',
    name: 'Dance',
    short: 'Movement with intention.',
    lede:
      'Coordination, choreography and conditioning — traditional and contemporary forms taught as a language of expression.',
    photo: 'dance',
    panelPhoto: 'hero-vertical-dancer',
    learn: [
      'Movement patterns, coordination and spatial awareness',
      'Cultural, traditional and contemporary styles',
      'Choreography and composition',
      'Physical conditioning and technique',
      'Dance production and stage presentation',
    ],
    outcomes: [
      'Advanced movement technique',
      'Strength, flexibility and endurance',
      'Creative choreographic voice',
      'Readiness for professional dance careers',
    ],
  },
  {
    slug: 'drama',
    index: '03',
    name: 'Drama',
    short: 'Story, character, stage.',
    lede:
      'Acting technique, scriptwriting and directing — building performers who can carry a story and a room.',
    photo: 'g-drama-kids',
    panelPhoto: 'drama',
    learn: [
      'Acting technique and character analysis',
      'Scriptwriting and directing',
      'Stage production — lighting, sound, costume',
      'Theatre history and genres',
      'Full-scale productions',
    ],
    outcomes: [
      'Professional acting skill',
      'Storytelling and directing ability',
      'Readiness for theatre and film',
      'Confidence and emotional intelligence',
    ],
  },
  {
    slug: 'visual-arts',
    index: '04',
    name: 'Visual Arts',
    short: 'Drawing, design, making.',
    lede:
      'Drawing, painting, sculpture and design principles — visual literacy built through the hands.',
    photo: 'g-clay',
    panelPhoto: 'visual-arts',
    learn: [
      'Drawing, colour and painting',
      'Design principles — shape, colour, texture',
      'Craft, mixed media and sculpting',
      'Composition and visual storytelling',
      'Portfolio development',
    ],
    outcomes: [
      'Visual literacy and original expression',
      'Creative thinking and problem-solving',
      'Command of core artistic technique',
      'A body of work to show',
    ],
  },
  {
    slug: 'technical-production',
    index: '05',
    name: 'Technical Production',
    short: 'Sound, light, stage.',
    lede:
      'The craft behind the performance — sound engineering, lighting and the running of a live event.',
    photo: 'lighting-rig',
    panelPhoto: 'technical',
    learn: [
      'Sound engineering and live mixing',
      'Stage lighting design and operation',
      'Event production and management',
      'Set, stage and technical rehearsal process',
      'Health, safety and professional crew practice',
    ],
    outcomes: [
      'Employable technical skill',
      'Calm command of live environments',
      'Production and event management ability',
      'A route into the industry behind the stage',
    ],
  },
  {
    slug: 'creative-media',
    index: '06',
    name: 'Creative Media & Content Creation',
    short: 'Camera, edit, publish.',
    lede:
      'Photography, videography, editing and digital publishing — telling the story and getting it seen.',
    photo: 'g-camera-studio',
    panelPhoto: 'media',
    learn: [
      'Camera operation, composition and framing',
      'Lighting and editing fundamentals',
      'Video production and visual storytelling',
      'Sound editing and script-to-screen production',
      'Digital publishing and personal branding',
    ],
    outcomes: [
      'Technical media skill on industry-standard tools',
      'Visual storytelling ability',
      'Content creation capability',
      'A publishable portfolio',
    ],
  },
];

export type Step = {
  n: string;
  title: string;
  body: string;
  photo: string;
};

/** The visual spine of the site: Discover → Learn → Practice → Create → Collaborate → Perform → Grow */
export const journey: Step[] = [
  {
    n: '01',
    title: 'Discover',
    body: 'Find the thing you are drawn to. Exposure before pressure — play, rhythm, movement, making.',
    photo: 'journey-discover',
  },
  {
    n: '02',
    title: 'Learn',
    body: 'Structured tuition, one-to-one or in groups. Technique taught properly, from the first lesson.',
    photo: 'journey-learn',
  },
  {
    n: '03',
    title: 'Practice',
    body: 'The unglamorous part. Repetition, correction, conditioning — where ability is actually built.',
    photo: 'journey-practice',
  },
  {
    n: '04',
    title: 'Create',
    body: 'Make your own work. Compose, choreograph, write, shoot, sculpt — and take responsibility for it.',
    photo: 'journey-create',
  },
  {
    n: '05',
    title: 'Collaborate',
    body: 'Nothing on a stage is made alone. Ensemble discipline, crew, cast, credit shared.',
    photo: 'journey-collaborate',
  },
  {
    n: '06',
    title: 'Perform',
    body: 'Showcases, concerts, exhibitions and full productions in front of a real audience.',
    photo: 'journey-perform',
  },
  {
    n: '07',
    title: 'Grow',
    body: 'Portfolio, mentorship and career pathways — into industry, into teaching, into your own enterprise.',
    photo: 'journey-grow',
  },
];

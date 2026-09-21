/**
 * Site-wide content. Edit here — nothing in this file is hard-coded into
 * components, so copy changes never require touching layout code.
 */

export const site = {
  name: 'Fanatic Arts',
  shortName: 'Fanatic Arts',
  tagline: 'Purpose. Excellence. Creative Futures.',
  /** The brand statement shown on the page (hero lede). */
  description:
    'Fanatic Arts is a multidisciplinary arts education and creative enterprise restoring the arts back to God.',
  /**
   * Search-engine description. Kept separate from the line above so the six
   * disciplines stay discoverable without lengthening the on-page statement.
   */
  seoDescription:
    'Fanatic Arts is a multidisciplinary arts education and creative enterprise — structured training for youth and adults across music, dance, drama, visual arts, technical production and creative media.',
  vision: 'RESTORING the arts back to God.',
  mission:
    'To help commercialise the arts by preserving the arts to last many generations to come.',
  founded: 'April 2008',
  founder: {
    name: 'Xolani Mpanza Jr',
    role: 'Founder & Director',
  },
  contact: {
    email: 'hello@fanaticarts.co.za',
    phone: '',
    location: 'South Africa',
    /**
     * Contact form handling, in priority order:
     *  1. formEndpoint — an external handler (Formspree, Basin, your own URL).
     *     If you set one, add its host to the CSP form-action in netlify.toml.
     *  2. netlifyForms — Netlify's built-in form handling. Zero config beyond
     *     deploying; submissions appear under Forms in the Netlify dashboard.
     *  3. Neither — the form composes a pre-filled email instead.
     */
    formEndpoint: '',
    netlifyForms: true,
  },
  social: [] as { label: string; href: string }[],
};

export const nav = [
  { label: 'About', href: '/about/' },
  { label: 'Programmes', href: '/programmes/' },
  { label: 'Disciplines', href: '/disciplines/' },
  { label: 'Stories', href: '/stories/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export const values = [
  {
    title: 'Faith & Purpose',
    body: 'Honouring God through artistic excellence.',
  },
  {
    title: 'Artistic Integrity',
    body: 'Commitment to quality, authenticity and discipline.',
  },
  {
    title: 'Preservation',
    body: 'Safeguarding artistic and cultural heritage.',
  },
  {
    title: 'Innovation',
    body: 'Integrating modern platforms and technologies.',
  },
  {
    title: 'Excellence in Education',
    body: 'Structured, professional arts training.',
  },
  {
    title: 'Generational Impact',
    body: 'Building sustainable creative legacies.',
  },
] as const;

export const departments = [
  {
    title: 'Arts Education',
    note: 'Core',
    body: 'Private and group tuition across every discipline, built on skill development, discipline and professional readiness.',
  },
  {
    title: 'Dance & Dramatic Arts',
    note: 'Movement & Performance Interpretation',
    body: 'A specialised unit for expressive, performance-ready dancers and actors — musical theatre movement, choreography for stage and live platforms.',
  },
  {
    title: 'Ocular',
    note: 'The Visuals & Photography Department',
    body: 'Ocular is the visuals and photography department — photography training and practice, visual branding for artists and productions, and documentation of performances, showcases and exhibitions.',
  },
  {
    title: 'Umbono',
    note: 'The Unfolding Vision — Apparel',
    body: 'The lifestyle apparel division, translating artistic and spiritual identity into wearable design.',
  },
] as const;

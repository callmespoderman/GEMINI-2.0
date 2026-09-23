import { IPhoneColorOption, CameraLens, SpecCategory } from '../types/iphone';

export const IPHONE_COLORS: IPhoneColorOption[] = [
  {
    id: 'midnight-green',
    name: 'Midnight Green',
    hex: '#4E5851',
    accentHex: '#647268',
    edgeHex: '#39423C',
    description: 'Precision-milled textured matte glass infused with deep, dark forest undertones.',
  },
  {
    id: 'space-gray',
    name: 'Space Gray',
    hex: '#3B3A39',
    accentHex: '#52504F',
    edgeHex: '#262524',
    description: 'Graphite-treated stainless steel and anti-reflective matte back glass.',
  },
  {
    id: 'silver',
    name: 'Silver',
    hex: '#E2E4E1',
    accentHex: '#F2F4F2',
    edgeHex: '#CFD1CE',
    description: 'Lustrous, polished surgical-grade stainless steel with frosted white matte glass.',
  },
  {
    id: 'gold',
    name: 'Gold',
    hex: '#FCEBD3',
    accentHex: '#FAE0BE',
    edgeHex: '#D9B48F',
    description: 'Dual-ion exchange molecular finish with warm, champagne-gold accents.',
  },
];

export const CAMERA_LENSES: CameraLens[] = [
  {
    id: 'ultra-wide',
    name: 'Ultra Wide',
    focalLength: '13 mm',
    aperture: 'f/2.4',
    zoomFactor: '0.5x',
    fieldOfView: '120° field of view',
    description: 'Captures 4x more scene. Ideal for dramatic landscapes, architecture, and tight indoor shots.',
    sampleImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'wide',
    name: 'Wide',
    focalLength: '26 mm',
    aperture: 'f/1.8',
    zoomFactor: '1x',
    fieldOfView: '100% Focus Pixels',
    description: 'The foundation of everyday photography. Optical image stabilization and blazing low-light autofocus.',
    sampleImage: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'telephoto',
    name: 'Telephoto',
    focalLength: '52 mm',
    aperture: 'f/2.0',
    zoomFactor: '2x',
    fieldOfView: '2x Optical Zoom',
    description: 'Brings distant subjects close with genuine optical depth. Features 40% more light capture than iPhone XS.',
    sampleImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
  },
];

export const TECH_SPECS: SpecCategory[] = [
  {
    title: 'Finish',
    items: [
      { label: 'Colors', value: 'Midnight Green, Space Gray, Silver, Gold' },
      { label: 'Material', value: 'Textured matte glass back and polished surgical-grade stainless steel design' },
    ],
  },
  {
    title: 'Capacity & Pricing',
    items: [
      { label: '64GB', value: 'iPhone 11 Pro: $999 | Pro Max: $1,099' },
      { label: '256GB', value: 'iPhone 11 Pro: $1,149 | Pro Max: $1,249' },
      { label: '512GB', value: 'iPhone 11 Pro: $1,349 | Pro Max: $1,449' },
    ],
  },
  {
    title: 'Display',
    items: [
      { label: 'Super Retina XDR', value: '5.8-inch (Pro) or 6.5-inch (Pro Max) all-screen OLED Multi-Touch display' },
      { label: 'Resolution', value: '2436-by-1125-pixel resolution at 458 ppi (Pro) / 2688-by-1242 at 458 ppi (Pro Max)' },
      { label: 'Contrast Ratio', value: '2,000,000:1 contrast ratio (typical)' },
      { label: 'Brightness', value: '800 nits max brightness (typical); 1,200 nits max brightness (HDR)' },
      { label: 'Color & Features', value: 'True Tone display, Wide color display (P3), Haptic Touch, Fingerprint-resistant oleophobic coating' },
    ],
  },
  {
    title: 'Splash, Water, and Dust Resistance',
    items: [
      { label: 'Rating', value: 'Rated IP68 (maximum depth of 4 meters up to 30 minutes) under IEC standard 60529' },
    ],
  },
  {
    title: 'Chip',
    items: [
      { label: 'Processor', value: 'A13 Bionic chip' },
      { label: 'Architecture', value: 'Third-generation Neural Engine, 2 performance cores, 4 efficiency cores, 4-core GPU' },
    ],
  },
  {
    title: 'Camera System',
    items: [
      { label: 'Triple 12MP System', value: 'Ultra Wide, Wide, and Telephoto cameras' },
      { label: 'Ultra Wide', value: 'ƒ/2.4 aperture and 120° field of view (13 mm)' },
      { label: 'Wide', value: 'ƒ/1.8 aperture (26 mm)' },
      { label: 'Telephoto', value: 'ƒ/2.0 aperture (52 mm)' },
      { label: 'Optical Zoom', value: '2x optical zoom in, 2x optical zoom out; digital zoom up to 10x' },
      { label: 'Night Mode', value: 'Automatic intelligent low-light exposure with computational fusion' },
    ],
  },
  {
    title: 'Power and Battery',
    items: [
      { label: 'iPhone 11 Pro', value: 'Lasts up to 4 hours longer than iPhone XS; Up to 18 hours video playback' },
      { label: 'iPhone 11 Pro Max', value: 'Lasts up to 5 hours longer than iPhone XS Max; Up to 20 hours video playback' },
      { label: 'Charging', value: 'Fast-charge capable: Up to 50% charge in around 30 minutes with included 18W adapter' },
    ],
  },
];

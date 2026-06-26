export interface Slide {
  id: string
  image: string
  category: string
  title: string
}

export const acrilicoSlides: Slide[] = [
  {
    id: 'acr-001',
    image: '/portafolio-swanson/ACRILICO/001.jpg',
    category: 'ACRILICO',
    title: 'Gato en acrilico sobre bastidor 2018',
  },
  {
    id: 'acr-002',
    image: '/portafolio-swanson/ACRILICO/002.jpg',
    category: 'ACRILICO',
    title: 'Gato y maceta en acrilico sobre bastidor 2023',
  },
  {
    id: 'acr-003',
    image: '/portafolio-swanson/ACRILICO/003.jpg',
    category: 'ACRILICO',
    title: 'Margaritas en acrilico sobre papel 2019',
  },
  {
    id: 'acr-004',
    image: '/portafolio-swanson/ACRILICO/004.png',
    category: 'ACRILICO',
    title: 'Gato y ventana en acrilico sobre madera 2023',
  },
  {
    id: 'acr-005',
    image: '/portafolio-swanson/ACRILICO/005.jpg',
    category: 'ACRILICO',
    title: 'Agua en acrilico sobre papel 2026',
  },
  {
    id: 'acr-006',
    image: '/portafolio-swanson/ACRILICO/006.jpg',
    category: 'ACRILICO',
    title: 'Rosa en acrilico sobre pared 2026',
  },
  {
    id: 'acr-007',
    image: '/portafolio-swanson/ACRILICO/007.png',
    category: 'ACRILICO',
    title: 'Principito en acrilico sobre tela jeans 2024',
  },
  {
    id: 'acr-008',
    image: '/portafolio-swanson/ACRILICO/008.jpg',
    category: 'ACRILICO',
    title: 'Rosa en acrilico sobre papel 2023',
  },
  {
    id: 'acr-009',
    image: '/portafolio-swanson/ACRILICO/009.jpg',
    category: 'ACRILICO',
    title: 'Gato en acrilico sobre bastidor 2026',
  },
  {
    id: 'acr-010',
    image: '/portafolio-swanson/ACRILICO/010.jpg',
    category: 'ACRILICO',
    title: 'Flor en acrilico sobre pared 2026',
  },
  {
    id: 'acr-011',
    image: '/portafolio-swanson/ACRILICO/011.jpg',
    category: 'ACRILICO',
    title: 'Alicia en acrilico sobre bastidor 2019',
  },
  {
    id: 'acr-012',
    image: '/portafolio-swanson/ACRILICO/012.jpg',
    category: 'ACRILICO',
    title: 'Fantasma en acrilico sobre papel entelado 2025',
  },
  {
    id: 'acr-013',
    image: '/portafolio-swanson/ACRILICO/013.jpg',
    category: 'ACRILICO',
    title: 'Girasol en acrilico sobre papel 2023',
  },
  {
    id: 'acr-014',
    image: '/portafolio-swanson/ACRILICO/014.png',
    category: 'ACRILICO',
    title: 'Gato en acrilico sobre papel entelado 2023',
  },
  {
    id: 'acr-015',
    image: '/portafolio-swanson/ACRILICO/015.jpg',
    category: 'ACRILICO',
    title: 'Paisaje en acrilico sobre bastidor 2019',
  },
  {
    id: 'acr-016',
    image: '/portafolio-swanson/ACRILICO/016.jpg',
    category: 'ACRILICO',
    title: 'Pajaro en acrilico sobre papel 2023',
  },
]

export const grafittoSlides: Slide[] = [
  {
    id: 'gra-001',
    image: '/portafolio-swanson/GRAFITO/001.jpg',
    category: 'GRAFITO',
    title: 'Levi en grafito sobre papel 2026',
  },
  {
    id: 'gra-002',
    image: '/portafolio-swanson/GRAFITO/002.jpg',
    category: 'GRAFITO',
    title: 'Haji en grafito sobre papel 2023',
  },
  {
    id: 'gra-003',
    image: '/portafolio-swanson/GRAFITO/003.jpg',
    category: 'GRAFITO',
    title: 'Slytherin en grafito sobre papel 2024',
  },
]

export const lapizSlides: Slide[] = [
  {
    id: 'lap-001',
    image: '/portafolio-swanson/LAPIZ A COLOR/001.jpg',
    category: 'LAPIZ A COLOR',
    title: 'Hongo en plumon sobre papel 2025',
  },
  {
    id: 'lap-002',
    image: '/portafolio-swanson/LAPIZ A COLOR/002.png',
    category: 'LAPIZ A COLOR',
    title: 'Mis pasiones en lapices de color sobre papel 2016',
  },
  {
    id: 'lap-003',
    image: '/portafolio-swanson/LAPIZ A COLOR/003.jpg',
    category: 'LAPIZ A COLOR',
    title: 'Liberen a dobby en lapices de colores y plumon sobre papel 2019',
  },
  {
    id: 'lap-004',
    image: '/portafolio-swanson/LAPIZ A COLOR/004.jpg',
    category: 'LAPIZ A COLOR',
    title: 'Billy y Mandy en lapices de colores sobre papel 2021',
  },
]

export const oleoSlides: Slide[] = [
  {
    id: 'ole-001',
    image: '/portafolio-swanson/OLEO/001.png',
    category: 'OLEO',
    title: 'Paisaje al oleo sobre bastidor 2018',
  },
  {
    id: 'ole-002',
    image: '/portafolio-swanson/OLEO/002.jpg',
    category: 'OLEO',
    title: 'Taza al oleo sobre papel 2018',
  },
  {
    id: 'ole-003',
    image: '/portafolio-swanson/OLEO/003.png',
    category: 'OLEO',
    title: 'Paisaje al oleo sobre bastidor 2019',
  },
  {
    id: 'ole-004',
    image: '/portafolio-swanson/OLEO/004.jpg',
    category: 'OLEO',
    title: 'Rosa al oleo sobre papel 2018',
  },
]

export const categories = [
  { name: 'ACRÍLICO', key: 'ACRILICO' },
  { name: 'GRAFITO', key: 'GRAFITO' },
  { name: 'LÁPIZ DE COLOR', key: 'LAPIZ A COLOR' },
  { name: 'ÓLEO', key: 'OLEO' },
]

export const categoryColors: Record<string, string> = {
  ACRILICO: 'badge-acrilico',
  GRAFITO: 'badge-grafito',
  'LAPIZ A COLOR': 'badge-lapiz',
  OLEO: 'badge-oleo',
}

export const slidesByCategory: Record<string, Slide[]> = {
  ACRILICO: acrilicoSlides,
  GRAFITO: grafittoSlides,
  'LAPIZ A COLOR': lapizSlides,
  OLEO: oleoSlides,
}

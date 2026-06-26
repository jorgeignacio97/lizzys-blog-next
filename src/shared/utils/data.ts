export const brand = {
  name: "Lizzy's",
  tagline: 'Costura · Pintura · Bordado',
  nav: ['Productos', 'Conócenos', 'Contacto'],
}

export const hero = {
  eyebrow: 'Taller artesanal · Lautaro, CL',
  subtitle:
    'Productos originales, hechos con amor y creatividad. Cada pieza nace de tus ideas y se borda, cose o pinta a mano — para personas como tú.',
}

export interface Product {
  n: string
  icon: string
  title: string
  sub: string
  desc: string
  meta: string
}

export const products: Product[] = [
  {
    n: '01',
    icon: 'sewing',
    title: 'Rediseños',
    sub: 'Costura · Confección',
    desc: 'Damos nueva vida a prendas y textiles. Ajustes, parches bordados, transformaciones a medida.',
    meta: 'desde $8.000',
  },
  {
    n: '02',
    icon: 'brush',
    title: 'Pintura personalizada',
    sub: 'Pintura textil · Ilustración',
    desc: 'Diseños únicos pintados a mano sobre poleras, totes y prendas. Ilustramos lo que imaginas.',
    meta: 'desde $12.000',
  },
  {
    n: '03',
    icon: 'needle',
    title: 'Bordado personalizado',
    sub: 'Bordado · Punto fino',
    desc: 'Bordado a mano y a máquina sobre cualquier tela. Iniciales, frases, ilustraciones, retratos.',
    meta: 'desde $10.000',
  },
]

export interface WhyItem {
  n: string
  icon: string
  title: string
  desc: string
}

export const whyItems: WhyItem[] = [
  {
    n: '01',
    icon: 'hand',
    title: 'Diseños personalizados y hechos a mano',
    desc: 'Cada pieza es única. Conversamos contigo y trabajamos sobre tu idea hasta dejarla justo como la imaginabas.',
  },
  {
    n: '02',
    icon: 'truck',
    title: 'Entregas en Lautaro, Temuco y toda la Araucanía',
    desc: 'Despachos rápidos en la región y envíos a todo Chile. Coordinamos contigo cada entrega.',
  },
  {
    n: '03',
    icon: 'leaf',
    title: 'Compromiso con el medio ambiente',
    desc: 'Trabajamos con telas reutilizadas, hilos de calidad y procesos de bajo impacto. Sostenibilidad real.',
  },
]

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'como-empezar-con-el-bordado',
    title: 'Cómo empezar con el bordado desde cero',
    excerpt:
      'Una guía simple para quienes quieren iniciarse en el mundo del bordado a mano. Agujas, hilos y paciencia.',
    date: '12 mayo 2025',
    category: 'Bordado',
  },
  {
    slug: 'pintura-textil-en-poleras',
    title: 'Pintura textil en poleras: tips y técnicas',
    excerpt:
      'Todo lo que necesitas saber para pintar sobre tela sin que se corra ni se descascare con los lavados.',
    date: '28 abril 2025',
    category: 'Pintura',
  },
  {
    slug: 'upcycling-ropa-usada',
    title: 'Upcycling: cómo transformar ropa usada',
    excerpt:
      'El rediseño de prendas es una de las formas más creativas de consumo responsable. Te contamos cómo lo hacemos.',
    date: '10 abril 2025',
    category: 'Rediseño',
  },
  {
    slug: 'hilo-y-aguja-para-principiantes',
    title: 'Elegir el hilo y la aguja correctos',
    excerpt:
      'No todos los hilos son iguales. Aprende a escoger según el tejido, el diseño y el efecto que buscas.',
    date: '22 marzo 2025',
    category: 'Bordado',
  },
]

export const footer = {
  address: 'Lautaro · Región de la Araucanía · Chile',
  whatsapp: '+Falta número',
  email: 'lizzys@contacto.com',
  rights: '© 2026 · Todos los derechos reservados',
  catalogLinks: ['Rediseños', 'Pintura textil', 'Bordado', 'Pedido a medida'],
  tallerLinks: ['Conócenos', 'Proceso', 'Sostenibilidad'],
}

export const linksFooter = {
  instagram: 'https://instagram.com/_lizzys._',
  whatsapp: `https://wa.me/${footer['whatsapp']}`,
  correo: `mailto:${footer['email']}`,
}

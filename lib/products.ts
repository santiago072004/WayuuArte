export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: 'bolsos' | 'mochilas' | 'munecos'
  colors: string[]
  images: string[]
  featured: boolean
  sizes?: string[]
}

export const products: Product[] = [
  // Bolsos Wayuu
  {
    id: 'bolso-wayuu-001',
    name: 'Mochila Wayuu Tradicional',
    description: 'Hermosa mochila wayuu tejida a mano con patrones geométricos tradicionales. Cada pieza es única y representa la cultura guajira.',
    price: 180000,
    category: 'mochilas',
    colors: ['Rojo', 'Naranja', 'Turquesa'],
    images: ['/products/mochila-wayuu-1.jpg'],
    featured: true,
    sizes: ['Pequeña', 'Mediana', 'Grande']
  },
  {
    id: 'bolso-wayuu-002',
    name: 'Bolso Artesanal Guajiro',
    description: 'Bolso de mano con diseños inspirados en la naturaleza de La Guajira. Tejido en crochet con hilos de alta calidad.',
    price: 120000,
    category: 'bolsos',
    colors: ['Amarillo', 'Verde', 'Morado'],
    images: ['/products/bolso-guajiro-1.jpg'],
    featured: true,
    sizes: ['Único']
  },
  {
    id: 'bolso-wayuu-003',
    name: 'Clutch Étnico Wayuu',
    description: 'Elegante clutch para ocasiones especiales. Combina la tradición wayuu con un diseño moderno y sofisticado.',
    price: 85000,
    category: 'bolsos',
    colors: ['Negro y Dorado', 'Blanco y Coral'],
    images: ['/products/clutch-wayuu-1.jpg'],
    featured: false,
    sizes: ['Único']
  },
  {
    id: 'mochila-004',
    name: 'Mochila Mini Wayuu',
    description: 'Versión mini de la tradicional mochila wayuu, perfecta para el día a día. Liviana y práctica.',
    price: 95000,
    category: 'mochilas',
    colors: ['Rosa', 'Celeste', 'Lavanda'],
    images: ['/products/mini-mochila-1.jpg'],
    featured: true,
    sizes: ['Mini']
  },
  {
    id: 'mochila-005',
    name: 'Mochila XL Viajera',
    description: 'Mochila wayuu de gran tamaño ideal para viajes. Espaciosa y resistente, hecha para durar.',
    price: 250000,
    category: 'mochilas',
    colors: ['Tierra', 'Azul Marino', 'Terracota'],
    images: ['/products/mochila-xl-1.jpg'],
    featured: false,
    sizes: ['XL']
  },
  // Muñecos
  {
    id: 'muneco-001',
    name: 'Muñeca Wayuu Tradicional',
    description: 'Encantadora muñeca tejida a crochet con vestido típico wayuu. Un regalo perfecto y con significado cultural.',
    price: 65000,
    category: 'munecos',
    colors: ['Multicolor'],
    images: ['/products/muneca-wayuu-1.jpg'],
    featured: true,
  },
  {
    id: 'muneco-002',
    name: 'Amigurumi Flamenco Guajiro',
    description: 'Adorable flamenco tejido en crochet, inspirado en las aves de La Guajira. Suave y decorativo.',
    price: 55000,
    category: 'munecos',
    colors: ['Rosa', 'Coral'],
    images: ['/products/flamenco-1.jpg'],
    featured: true,
  },
  {
    id: 'muneco-003',
    name: 'Set de Cactus Decorativos',
    description: 'Conjunto de 3 cactus tejidos a crochet, perfectos para decorar cualquier espacio con un toque del desierto guajiro.',
    price: 75000,
    category: 'munecos',
    colors: ['Verdes variados'],
    images: ['/products/cactus-set-1.jpg'],
    featured: false,
  },
  {
    id: 'muneco-004',
    name: 'Tortuga Marina Amigurumi',
    description: 'Tierna tortuga marina tejida, representando la fauna del Caribe colombiano. Ideal para niños y coleccionistas.',
    price: 48000,
    category: 'munecos',
    colors: ['Verde y Turquesa'],
    images: ['/products/tortuga-1.jpg'],
    featured: false,
  },
  {
    id: 'bolso-006',
    name: 'Tote Bag Artesanal',
    description: 'Bolso grande estilo tote con asa larga. Perfecto para ir de compras o a la playa con estilo wayuu.',
    price: 140000,
    category: 'bolsos',
    colors: ['Natural', 'Terracota', 'Índigo'],
    images: ['/products/tote-wayuu-1.jpg'],
    featured: false,
    sizes: ['Grande']
  },
]

export const categories = [
  { id: 'todos', name: 'Todos', icon: '✨' },
  { id: 'mochilas', name: 'Mochilas Wayuu', icon: '🎒' },
  { id: 'bolsos', name: 'Bolsos', icon: '👜' },
  { id: 'munecos', name: 'Muñecos Crochet', icon: '🧸' },
]

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export const WHATSAPP_NUMBER = '573133841159'

export const createWhatsAppLink = (product: Product, message?: string): string => {
  const defaultMessage = `¡Hola! Me interesa el producto: *${product.name}*\n\nPrecio: ${formatPrice(product.price)}\n\n¿Está disponible?`
  const encodedMessage = encodeURIComponent(message || defaultMessage)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
}

export const createGeneralWhatsAppLink = (): string => {
  const message = `¡Hola! Me gustaría conocer más sobre sus hermosas artesanías wayuu. ¿Podrían ayudarme?`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

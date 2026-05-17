'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Product, formatPrice, createWhatsAppLink } from '@/lib/products'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

interface ProductCardProps {
  product: Product
  index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  const categoryColors = {
    mochilas: 'bg-primary text-primary-foreground',
    bolsos: 'bg-secondary text-secondary-foreground',
    munecos: 'bg-accent text-accent-foreground',
  }

  const categoryNames = {
    mochilas: 'Mochila Wayuu',
    bolsos: 'Bolso',
    munecos: 'Muñeco Crochet',
  }

  // Generate a placeholder color based on index
  const placeholderColors = [
    'from-primary/20 to-secondary/20',
    'from-secondary/20 to-accent/20',
    'from-accent/20 to-primary/20',
    'from-primary/30 to-accent/30',
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
        <div className="relative aspect-square overflow-hidden">
          {/* Placeholder with gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${placeholderColors[index % placeholderColors.length]}`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                <span className="text-4xl">
                  {product.category === 'mochilas' ? '🎒' : product.category === 'bolsos' ? '👜' : '🧸'}
                </span>
              </div>
            </div>
          </div>

          {/* Overlay on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-foreground/60 flex items-center justify-center"
              >
                <motion.a
                  href={createWhatsAppLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#20BD5A] transition-colors"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <WhatsAppIcon />
                  Pedir ahora
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Featured badge */}
          {product.featured && (
            <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
              Destacado
            </Badge>
          )}

          {/* Category badge */}
          <Badge className={`absolute top-3 right-3 ${categoryColors[product.category]}`}>
            {categoryNames[product.category]}
          </Badge>
        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold text-lg text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            
            <div className="flex gap-1">
              {product.colors.slice(0, 3).map((color, i) => (
                <span 
                  key={i}
                  className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          {product.sizes && (
            <div className="mt-2 flex gap-1 flex-wrap">
              {product.sizes.map((size, i) => (
                <span 
                  key={i}
                  className="text-xs px-2 py-0.5 border border-border rounded text-muted-foreground"
                >
                  {size}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

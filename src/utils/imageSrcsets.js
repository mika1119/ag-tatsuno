const images = import.meta.glob(
  '@/assets/images/**/*.webp',
  {
    eager: true,
    query: '?w=800&format=webp',
    import: 'default'
  }
)

const srcsets = import.meta.glob(
  '@/assets/images/**/*.webp',
  {
    eager: true,
    query: '?w=400;800;1000;1200;1600&format=webp&quality=80&as=srcset',
    import: 'default'
  }
)

export const getImage = (path) => {
  const key = `/src/assets/images/${path}`

  return {
    image: images[key],
    srcset: srcsets[key]
  }  
}
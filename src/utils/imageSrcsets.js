const images = import.meta.glob(
  '@/assets/images/**/*.webp',
  {
    eager: true,
    query: '?w=750&format=webp',
    import: 'default'
  }
)

const srcsets = import.meta.glob(
  '@/assets/images/**/*.webp',
  {
    eager: true,
    query: '?w=750;920;1200&format=webp&as=srcset',
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
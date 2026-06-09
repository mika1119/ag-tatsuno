const cardSrcImages = import.meta.glob(
  '@/assets/images/**/*.webp',
  {
    eager: true,
    query: '?w=720&format=webp',
    import: 'default'
  }
)

const cardSrcsets = import.meta.glob(
  '@/assets/images/**/*.webp',
  {
    eager: true,
    query: '?w=360;720;1440&format=webp&as=srcset',
    import: 'default'
  }
)

export const getImage = (path) => {
  const key = `/src/assets/images/${path}`

  return {
    image: cardSrcImages[key],
    srcset: cardSrcsets[key]
  }  
}
const cardImages = import.meta.glob(
  '@/assets/images/**/*.webp',
  {
    eager: true,
    // TODO：サイズ変更をする
    query: '?w=360&format=webp',
    import: 'default'
  }
)

const cardSrcsets = import.meta.glob(
  '@/assets/images/**/*.webp',
  {
    eager: true,
    // TODO：サイズ変更をする
    query: '?w=360;480&format=webp&as=srcset',
    import: 'default'
  }
)

export const getImage = (path) => {
  const key = `/src/assets/images/${path}`

  return {
    image: cardImages[key],
    srcset: cardSrcsets[key]
  }  
}
interface Photocard {
  id: number
  group: string
  image: string | undefined
  name: string
  theme: string
  price: number
  is_liked: boolean
}

export type PhotocardContextType = {
  photocards: Photocard[]
  updatePhotocard: (id) => void
}
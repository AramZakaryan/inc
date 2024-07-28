export type GetAllPostsResponse = {
  totalCount: number
  pageSize: number
  items: GetAllPostsResponseItems[]
  totalUsers: number
}
type GetAllPostsResponseItemsImages = {
  url: string
  width: number
  height: number
  fileSize: number
  createdAt: string
  uploadId: string
}
type GetAllPostsResponseItemsOwner = {
  firstName?: any
  lastName?: any
}
type GetAllPostsResponseItems = {
  id: number
  userName: string
  description: string
  location?: any
  images: GetAllPostsResponseItemsImages[]
  createdAt: string
  updatedAt: string
  avatarOwner: string
  ownerId: number
  owner: GetAllPostsResponseItemsOwner
  likesCount: number
  isLiked: boolean
}

export type GetPostsArgs = {
  pageSize?: number
  sortBy?: string
  sortDirection?: 'asc' | 'desc'
}

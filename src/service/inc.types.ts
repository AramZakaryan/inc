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

export type GetProfileResponse = {
  id: number
  userName: string
  firstName?: any
  lastName?: any
  city?: any
  country?: any
  dateOfBirth?: any
  aboutMe?: any
  createdAt: string
  avatars: any[]
}

export type updateProfileArgs = {
  userName: string
  firstName: string
  lastName: string
  city?: string
  country?: string
  dateOfBirth?: string
  aboutMe?: string
}

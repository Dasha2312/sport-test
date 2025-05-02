export interface VideoItem {
  id: number,
  title: string,
  date: string,
  comments: number,
  category: string,
  href: string,
  img: string
}

export interface VideoProps {
  videos: VideoItem[]
}
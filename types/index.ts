// types/index.ts

export interface Video {
  id: string;
  title: string;
  thumbnail?: string;
  description?: string;
  views: number;
  likes?: number;
  createdAt: string | Date;
  duration?: number;
  channelName: string;
  channelAvatar?: string;
  subscribers?: number;
  category?: string;
  projectUrl?: string;
  techStack: string[];

  // New properties added
  features?: string[];
  challenges?: string[];
  implementation?: string;
  conclusion?: string;
  realTimeUseCases?: string[];
}

export interface Category {
  id: string;
  name: string;
}

export interface NavbarProps {
  toggleSidebar: () => void;
}

export interface SidebarProps {
  isOpen: boolean;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface VideoCardProps {
  video: Video;
}

export interface VideoGridProps {
  videos: Video[];
  categories?: Category[];
}

export interface VideoPlayerProps {
  video: Video;
}

export interface CategoryPillsProps {
  categories: Category[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export interface CommentsProps {
  videoId: string;
}

export interface source {
  id: any;
  name: string;
}

export interface dData {
  id?: number;
  albumId?: number;
  title: string;
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: source;
  url: string;
  urlToImage: string;
}

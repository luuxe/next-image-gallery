export interface UploadResponse {
  success: boolean;
  url?: string;
}

export interface Image {
  id: string;
  url: string;
}

export interface ListImagesResponse {
  images: Image[];
}
export interface UploadResponse {
  success: boolean;
  url?: string;
}

export interface Image {
  fileName: string;
  url: string;
}

export interface ListImagesResponse {
  images: Image[];
}
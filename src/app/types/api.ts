export interface UploadResponse {
  success: boolean;
  name?: string;
}

export interface Image {
  id: string;
  url: string;
}

export interface ListImagesResponse {
  images: Image[];
}
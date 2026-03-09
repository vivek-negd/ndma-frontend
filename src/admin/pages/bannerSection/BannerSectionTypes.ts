export interface BannerSectionType {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  button_text?: string;
  button_link?: string;
  image_name?: string;
  image_path?: string;
  image_type?: string;
  is_active: boolean;
  display_order: number;
  created_at?: string;
  updated_at?: string;
}
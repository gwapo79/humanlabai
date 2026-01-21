
from PIL import Image
import os
import sys

def crop_and_upscale():
    input_path = "public/images/atelier26/hero_wide_v4.png"
    output_path = "public/images/atelier26/hero_wide.webp"
    
    if not os.path.exists(input_path):
        print(f"Error: {input_path} not found")
        return

    try:
        # Open the square image (1024x1024)
        with Image.open(input_path) as img:
            width, height = img.size
            print(f"Original size: {width}x{height}")
            
            # Target Aspect Ratio 16:9
            # width is 1024.
            # target_height = 1024 * (9/16) = 576.
            
            target_height = int(width * 9 / 16)
            top = (height - target_height) // 2
            bottom = top + target_height
            
            # Crop to center 16:9 band
            print(f"Cropping to 16:9 ({width}x{target_height}) from vertical center...")
            cropped_img = img.crop((0, top, width, bottom))
            
            # Resize (Upscale) to 4K width (3840)
            target_upscale_width = 3840
            target_upscale_height = int(3840 * 9 / 16)
            
            print(f"Upscaling to {target_upscale_width}x{target_upscale_height}...")
            # Use Lanczos resampling for high quality
            final_img = cropped_img.resize((target_upscale_width, target_upscale_height), resample=Image.Resampling.LANCZOS)
            
            # Save as WebP
            final_img.save(output_path, "WEBP", quality=95)
            print(f"Saved to {output_path}")
            
    except Exception as e:
        print(f"Error processing image: {e}")

if __name__ == "__main__":
    crop_and_upscale()

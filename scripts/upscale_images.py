
import os
from PIL import Image

def upscale_and_convert(directory):
    print(f"Processing images in {directory}...")
    
    # Target 4K width approx, or at least significantly larger.
    # If original is 1024, let's go to 3840 (approx 3.75x)
    # Using Lanczos for best quality resampling.
    TARGET_WIDTH = 3840
    
    for filename in os.listdir(directory):
        if filename.lower().endswith('.png'):
            filepath = os.path.join(directory, filename)
            try:
                with Image.open(filepath) as img:
                    # Calculate new height to maintain aspect ratio
                    w_percent = (TARGET_WIDTH / float(img.size[0]))
                    h_size = int((float(img.size[1]) * float(w_percent)))
                    
                    print(f"  Upscaling {filename} from {img.size} to ({TARGET_WIDTH}, {h_size})...")
                    
                    # High quality resize
                    img = img.resize((TARGET_WIDTH, h_size), Image.Resampling.LANCZOS)
                    
                    # Save as WebP
                    new_filename = os.path.splitext(filename)[0] + '.webp'
                    new_filepath = os.path.join(directory, new_filename)
                    
                    img.save(new_filepath, 'WEBP', quality=95, method=6)
                    print(f"  Saved to {new_filename} (WebP, Q=95)")
                    
            except Exception as e:
                print(f"  Error processing {filename}: {e}")

if __name__ == "__main__":
    target_dir = os.path.join(os.getcwd(), 'public/images/atelier26')
    upscale_and_convert(target_dir)

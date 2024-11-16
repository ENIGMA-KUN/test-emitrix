// Import from assets folder
export function getImageUrl(name) {
  try {
      return new URL(`../assets/${name}`, import.meta.url).href;
  } catch (error) {
      console.error(`Error loading image from assets: ${name}`, error);
      return '';
  }
}

// Import from images folder
export function getImageFromImages(name) {
  try {
      return new URL(`../images/${name}`, import.meta.url).href;
  } catch (error) {
      console.error(`Error loading image from images folder: ${name}`, error);
      return '';
  }
}
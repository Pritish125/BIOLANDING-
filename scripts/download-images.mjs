import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageUrls = {
  hero: {
    pellets: 'https://picsum.photos/800/800?random=1',
    farming: 'https://picsum.photos/800/800?random=2'
  },
  benefits: {
    farmers: 'https://picsum.photos/800/800?random=3',
    companies: 'https://picsum.photos/800/800?random=4',
    environment: 'https://picsum.photos/800/800?random=5'
  },
  howItWorks: {
    step1: 'https://picsum.photos/800/800?random=6',
    step2: 'https://picsum.photos/800/800?random=7',
    step3: 'https://picsum.photos/800/800?random=8'
  },
  about: {
    team: 'https://picsum.photos/800/800?random=9',
    mission: 'https://picsum.photos/800/800?random=10'
  },
  cta: {
    background: 'https://picsum.photos/800/800?random=11'
  },
  contact: {
    map: 'https://picsum.photos/800/800?random=12'
  }
};

const assetsDir = path.join(__dirname, '../client/src/assets/images');

// Create assets directory if it doesn't exist
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Function to download and optimize image
async function downloadAndOptimizeImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        const redirectUrl = response.headers.location;
        if (!redirectUrl) {
          reject(new Error('Redirect URL not found'));
          return;
        }
        // Retry with the redirect URL
        downloadAndOptimizeImage(redirectUrl, outputPath)
          .then(resolve)
          .catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }

      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', async () => {
        if (chunks.length === 0) {
          reject(new Error('No data received from the server'));
          return;
        }

        const buffer = Buffer.concat(chunks);
        try {
          await sharp(buffer)
            .resize(800, 800, { fit: 'inside' })
            .jpeg({ quality: 80 })
            .toFile(outputPath);
          console.log(`Downloaded and optimized: ${outputPath}`);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    });

    request.on('error', (error) => {
      reject(error);
    });

    // Set a timeout of 10 seconds
    request.setTimeout(10000, () => {
      request.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

// Download all images
async function downloadAllImages() {
  for (const [category, categoryImages] of Object.entries(imageUrls)) {
    for (const [name, url] of Object.entries(categoryImages)) {
      const outputPath = path.join(assetsDir, `${category}-${name}.jpg`);
      try {
        await downloadAndOptimizeImage(url, outputPath);
      } catch (error) {
        console.error(`Error downloading ${category}-${name}:`, error);
      }
    }
  }
}

downloadAllImages().catch(console.error); 
import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
import { join } from 'path';

const BASE_URL = 'http://localhost:3000';
const OUTPUT_DIR = '/opt/cursor/artifacts';

const pages = [
  { path: '/', name: 'home-es' },
  { path: '/en', name: 'home-en' },
  { path: '/sistema', name: 'sistema' },
];

const viewports = [
  { width: 1440, height: 900, suffix: '1440' },
  { width: 390, height: 844, suffix: '390' },
];

async function takeScreenshots() {
  await mkdir(OUTPUT_DIR, { recursive: true });
  
  const browser = await chromium.launch({ headless: true });
  
  for (const page of pages) {
    for (const viewport of viewports) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
      });
      const browserPage = await context.newPage();
      
      await browserPage.goto(`${BASE_URL}${page.path}`, {
        waitUntil: 'networkidle',
      });
      
      await browserPage.waitForTimeout(500);
      
      const filename = `${page.name}-${viewport.suffix}.png`;
      const filepath = join(OUTPUT_DIR, filename);
      
      await browserPage.screenshot({
        path: filepath,
        fullPage: true,
      });
      
      console.log(`Saved: ${filepath}`);
      await context.close();
    }
  }
  
  await browser.close();
  console.log('Done!');
}

takeScreenshots().catch(console.error);

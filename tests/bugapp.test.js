import { test, expect } from '@playwright/test';

test.describe('BugApp E2E', () => {
  test('website loads correctly', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Insect Simulator/);
  });

  test('time=true parameter initializes the timestamp overlay', async ({ page }) => {
    // Navigate with time=true
    await page.goto('/?time=true');
    
    // Check if the overlay exists
    const overlay = page.locator('#datetime-overlay');
    await expect(overlay).toBeVisible();
    
    // Check if it has content (it should have a timestamp)
    const text = await overlay.textContent();
    expect(text).not.toBe('');
  });

  test('fly parameter initializes bug controllers', async ({ page }) => {
    // Navigate with fly=5
    await page.goto('/?fly=5');
    
    // Bug.js creates divs with class 'bug'
    // It might take a moment to spawn them due to minDelay
    const bug = page.locator('.bug');
    await expect(bug.first()).toBeAttached({ timeout: 15000 });
    
    const count = await bug.count();
    expect(count).toBeGreaterThan(0);
  });

  test('background parameter applies background image', async ({ page }) => {
    const bgUrl = 'https://example.com/bg.png';
    await page.goto(`/?background=${encodeURIComponent(bgUrl)}`);
    
    const body = page.locator('body');
    const backgroundImage = await body.evaluate((el) => el.style.backgroundImage);
    expect(backgroundImage).toContain(bgUrl);
  });

  test('multiple parameters work together', async ({ page }) => {
    await page.goto('/?time=true&fly=1');
    
    await expect(page.locator('#datetime-overlay')).toBeVisible();
    await expect(page.locator('.bug').first()).toBeAttached({ timeout: 15000 });
  });
});

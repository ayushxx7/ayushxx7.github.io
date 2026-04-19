import asyncio
from playwright.async_api import async_playwright
import os
import subprocess
import time
import socket

def is_port_in_use(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex(('localhost', port)) == 0

async def capture_screenshots():
    port = 8000
    server_process = None
    
    if not is_port_in_use(port):
        print(f"🚀 Starting local server on port {port}...")
        server_process = subprocess.Popen(["python3", "-m", "http.server", str(port)], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        # Give the server time to start
        time.sleep(2)
    else:
        print(f"⚠️ Port {port} already in use, assuming it's serving our app.")

    url = f"http://localhost:{port}"
    output_dir = "showcase"
    os.makedirs(output_dir, exist_ok=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        
        # Desktop
        print("📸 Capturing Desktop view...")
        context = await browser.new_context(viewport={'width': 1440, 'height': 900})
        page = await context.new_page()
        await page.goto(url)
        await asyncio.sleep(2)
        await page.screenshot(path=os.path.join(output_dir, "desktop_home.png"), full_page=True)
        
        # Portfolio Section
        portfolio_selector = "#portfolio"
        portfolio_locator = page.locator(portfolio_selector)
        if await portfolio_locator.count() > 0:
            await portfolio_locator.scroll_into_view_if_needed()
            await asyncio.sleep(1)
            await page.screenshot(path=os.path.join(output_dir, "desktop_portfolio.png"))

        # Mobile
        print("📸 Capturing Mobile view...")
        mobile_context = await browser.new_context(viewport={'width': 375, 'height': 812}, is_mobile=True)
        mobile_page = await mobile_context.new_page()
        await mobile_page.goto(url)
        await asyncio.sleep(2)
        await mobile_page.screenshot(path=os.path.join(output_dir, "mobile_home.png"))

        await browser.close()

    if server_process:
        print("🛑 Stopping local server...")
        server_process.terminate()

if __name__ == "__main__":
    asyncio.run(capture_screenshots())

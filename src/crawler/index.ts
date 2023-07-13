import { load } from 'cheerio';

export class Destiny2StatusScraper {
  async scrapeStatus(url: string) {
    const request = await fetch(url);
    const response = await request.text();

    const $ = load(response);

    const $statusContent = $('.service-status-alert').text().trim();
    return $statusContent;
  }
}

export default async function scrapeInit() {
  const scraper = new Destiny2StatusScraper();
  return await scraper.scrapeStatus(
    'https://istheservicedown.com.br/status/destiny'
  );
}

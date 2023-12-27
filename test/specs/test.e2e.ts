import { $, browser } from '@wdio/globals'

describe('Electron Testing', () => {
    it('should print application title', async () => {
        // console.log('Hello', await browser.getTitle(), 'application!');
        const btn = $('>>>button');
        await btn.click();
        await btn.click();
        await btn.click();
        
        await expect(btn).toHaveText('attendee count is 4');
        await browser.pause(4000);

    })
})


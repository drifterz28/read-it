import jsdom from 'jsdom';

const { JSDOM } = jsdom;

export default async function getHtml(article) {

    return await JSDOM.fromURL(article).then(dom => {
        const head = dom.window.document.querySelector('head').innerHTML.toString();
        const text = dom.window.document.querySelector('body').innerHTML.toString();
        return {
            head: head.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ''),
            text: text.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        }
    });

}

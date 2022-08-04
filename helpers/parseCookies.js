const cookie = require('cookie');

export function parseCookies(req) {
    return cookie.parse(req ? req.headers.cookie || '' : document.cookie )
}
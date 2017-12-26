import Cookies from 'js-cookie';

export function getCookie() {
    const cookie = Cookies.get('auth_token');
    if(cookie) {
        return JSON.parse(cookie);
    }
    return {}
}

export function setCookie (response) {
    Cookies.set('auth_token', JSON.stringify({
        'access-token': response.headers['access-token'],
        'client': response.headers['client'],
        'uid': response.headers['uid']
    }));
}
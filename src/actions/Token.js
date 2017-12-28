import Cookies from 'js-cookie';

export function getCookie() {
    let cookie = Cookies.get('auth_token');
    if(cookie) {
        return (cookie);
    }
    return {}
}

export function setCookie (response) {
    let header = response.headers;
    if (header['access-token'] && header['client'] && header['uid']) {
        header = {
            'access-token': header['access-token'],
            'client': header['client'],
            'uid': header['uid']
        };
        Cookies.set('auth_token', JSON.stringify(header));
    }
}

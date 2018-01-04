import Cookies from 'js-cookie';

export function getCookie(key) {
    return Cookies.get(key);
}
export const setAuthCookies = (headers) => {
    setCookie('access-token', headers['access-token']);
    setCookie('client', headers['client']);
    setCookie('uid', headers['uid']);
};

export const setCookie = (key, value) => {
    if(key && value !== undefined) {
        Cookies.set(key, value)
    }
};

export function remCookie(key,value) {
    return Cookies.remove(key,value);
}

import { cookies } from 'next/headers';

interface CookieOptions {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
  httpOnly?: boolean;
}
const cookieStore = cookies()
export function setCookie(name: string, value: string, options: CookieOptions = {}) {
  cookieStore.set(name, value, options);
}

export function getCookie(name: string): any {
  return cookieStore.get(name) ?? "";
}

export function removeCookie(name: string) {
  cookieStore.delete(name);
}

export function expireCookie(name:string,value:string){
  cookieStore.set(name, value, {maxAge:0})
}
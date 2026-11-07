export const load=(key,fallback)=>{try{const v=localStorage.getItem(key);return v?JSON.parse(v):fallback}catch{return fallback}};
export const save=(key,value)=>localStorage.setItem(key,JSON.stringify(value));
export const clearApp=()=>Object.keys(localStorage).filter(k=>k.startsWith('dj_')).forEach(k=>localStorage.removeItem(k));
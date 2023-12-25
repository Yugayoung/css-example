let count = 0 ;
export default function increase() {
    count++;
    console.log(count);
}

export function increase1() {
    count++;
    console.log(count);
}

export function getCount() {
    return count;
}
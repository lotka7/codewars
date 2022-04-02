export const multiple = (num: number) => {
    let total = 0;
    for (let i = 0; i < num; i++) {
        total += (i % 5 === 0 || i % 3 === 0) ? i : 0;
        
    }
    return total;
}
export const twoToOne = (s1: string, s2: string) => {
    return (s1 + s2).split('').filter((value: string, index: number, self: string[]) => 
        self.indexOf(value) === index
    ).sort().join('')
}
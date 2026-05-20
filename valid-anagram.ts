function isAnagram(s: string, t: string): boolean {
    const sChar = Array.from(s);
    const tChar = Array.from(t);

    if (sChar.length !== tChar.length)
        return false;
    
    const count = new Map<string, number>();

    for (const char of sChar)
        count.set(char, (count.get(char) ?? 0) + 1);
    
    for (const char of tChar) {
        const current = count.get(char);

        if (current === undefined)
            return false;
        
        if (current === 1)
            count.delete(char);
        else
            count.set(char, current - 1);
    }
    return count.size === 0;
};

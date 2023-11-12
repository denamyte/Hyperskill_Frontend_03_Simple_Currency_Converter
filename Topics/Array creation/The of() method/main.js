function* evenArray (from, to) {
    while (from <= to) {
        if (from % 2 === 0) {
            yield from 
        }
        from++
    }
}

console.log(Array.from(evenArray(1, 10)))

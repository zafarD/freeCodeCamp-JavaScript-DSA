const getMode = (array) => {
    const counts = {};
    array.forEach((el) => {
        counts[el] = (counts[el] || 0) + 1;
    })

    if (new Set(Object.values(counts)).size === 1) {
        return null;
    }
    const highest = Object.keys(counts).sort(
        (a, b) => counts[b] - counts[a]
    )[0];
    console.log(highest);
    const mode = Object.keys(counts).filter(
        (el) => counts[el] === counts[highest]
    );
    return mode.join(", ");
}

const arr = ['a', 'b','c','c']
getMode(arr);
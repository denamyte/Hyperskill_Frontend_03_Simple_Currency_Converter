function switchTheValues(cats) {
    cats.forEach(cat => {
        let {name, breed, owner} = cat;
        console.log(
            `${name} has a cat named ${owner}, whose breed is ${breed}`
        );
    });
}
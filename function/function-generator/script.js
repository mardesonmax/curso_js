function* generator() {
    yield () => {
        console.log('vim do yield_1');
    }

    yield () => {
        console.log('vim do yield_2');
    }

    yield () => {
        console.log('vim do yield_3');
    }
}

const gen = generator();

for(let func of gen) {
    func();
}

// const func1 = gen.next();
// const func2 = gen.next();
// const func3 = gen.next();

// func1();
// func2();
// func3();
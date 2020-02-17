import struct from '../src/core/struct';

test('adding item to list', () => {
    const list = new struct.list();
    list.add(10);
    expect(list.get(0)).toEqual(10);
});

test('adding item to list by index', () => {
    const list = new struct.list();
    list.addByIndex(110, 10);
    expect(list.get(110)).toEqual(10);
});

test('removing item from list', () => {
    const list = new struct.list();
    list.add({ firstName: "John", lastName: "Doe" });
    list.add({ firstName: "John", lastName: "Rambo" });
    list.add({ firstName: "Quinn", lastName: "Stewart" });
    list.remove(1);
    expect(list.get(1)).toEqual({ firstName: "Quinn", lastName: "Stewart" });
});

test('removing first item from list', () => {
    const list = new struct.list();
    list.add({ firstName: "John", lastName: "Doe" });
    list.add({ firstName: "John", lastName: "Rambo" });
    list.remove(0);
    expect(list.get(0)).toEqual({ firstName: "John", lastName: "Rambo" });
});

test('removing last item from list', () => {
    const list = new struct.list();
    list.add({ firstName: "John", lastName: "Doe" });
    list.add({ firstName: "John", lastName: "Rambo" });
    list.remove(1);
    expect(list.get(1)).toEqual(undefined);
});


test('iterating over list', () => {
    const list = new struct.list();
    let cntr = 0;
    list.add({ firstName: "John", lastName: "Doe" });
    list.add({ firstName: "John", lastName: "Rambo" });

    for (let item of list) {
        if (cntr === 0) {
            expect(item).toEqual({ firstName: "John", lastName: "Doe" });
        } else if (cntr === 1) {
            expect(item).toEqual({ firstName: "John", lastName: "Rambo" });
        }
        cntr++;
    }
});

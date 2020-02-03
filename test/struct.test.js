import struct from '../src/core/struct';

test('adding item to list', () => {
    const list =new struct.list();
    list.add(10);
    expect(list.get(0)).toEqual(10);
});

test('removing item from list', () => {
    const list =new struct.list();
    list.add({ firstName:"John", lastName: "Doe" });
    list.remove(0);
    expect(list.get(0)).toEqual(undefined);
});
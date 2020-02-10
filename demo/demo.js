function demoList(){
    const struct = qk.struct;
    const list = struct.list();
    list.add(10);
    list.add(20);
    list.add(30);
    list.add(40);
    list.add(50);
    list.addByIndex(110,50);

    console.log('List state before remove');
    console.log(`List length: ${list.getLength()}`);
    console.log(`Value from method get(0): ${list.get(0)}`);
    console.log(`Value from method get(110): ${list.get(110)}`);
    console.log('Values from method print:');
    list.print((nodeValue,index)=>{
        console.log(`index:${index}, value:${nodeValue}`);
    });
    console.log('List state after removing element with index==2');
    list.remove(2);
    console.log(`List length: ${list.getLength()}`);
    list.print((nodeValue,index)=>{
        console.log(`index:${index}, value:${nodeValue}`);
    });
}


function demo(){
    demoList();
}

demo();
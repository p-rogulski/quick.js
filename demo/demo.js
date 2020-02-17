function demoList(){
    const struct = qk.struct;
    const list = struct.list();
    list.add(10);
    list.add(20);
    list.add(30);
    list.add(40);
    list.add(50);
    list.addByIndex(110,59);
    
    for(let item of list){
        console.log(item,'(fom iterable)');
    }

    console.log('List state before remove');
    console.log(`List length: ${list.getLength()}`);
    console.log(`Value from method get(0): ${list.get(0)}`);
    console.log(`Value from method get(110): ${list.get(110)}`);

    list.print((nodeValue,index)=>{
        console.log(`index:${index}, value:${nodeValue}`, '(from print)');
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
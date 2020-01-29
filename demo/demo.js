function demoList(){
    const struct = qk.struct;
    const list = struct.list();
    list.add(10);
    list.add(20);
    list.add(30);
    list.add(40);
    list.add(50);

    console.log("List state before remove");
    list.print((nodeValue,index)=>{
        console.log(`index:${index}, value:${nodeValue}`);
    });
    console.log("List state after removing element with index==2");
    list.remove(2);
    list.print((nodeValue,index)=>{
        console.log(`index:${index}, value:${nodeValue}`);
    });
}


function demo(){
    demoList();
}

demo();
function demoList(){
    const struct = qk.struct;
    const list = struct.list();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    list.print((nodeValue)=>{
        console.log(nodeValue);
    });
}


function demo(){
    demoList();
}

demo();
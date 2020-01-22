const struct = (function () {
    const structApi = {};
    structApi.list = function () {
        const listApi = {};
        var head, tail = null;

        listApi.add = function (value) {
            if (!head) {
                head = {
                    id: 1,
                    value: value,
                };

                tail = head;
            } else {
                tail.next = {
                    id: tail.id + 1,
                    value: value,
                };

                tail = tail.next;
            }
        }


        listApi.print = function (callback) {
            function process(currentNode) {
                callback(currentNode.value);
                if (currentNode.id !== tail.id) {
                    process(currentNode.next);
                }
            }


            if (head) {
                process(head);
            }
        }

        return listApi;

    }

    structApi.tree = function () {
        
    }

    structApi.graph = function () {

    }


    structApi.stack = function () {

    }

    return structApi;
})();;
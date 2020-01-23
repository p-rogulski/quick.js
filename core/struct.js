const struct = (function () {
    const structApi = {};
    structApi.list = function () {
        const listApi = {};
        var head, tail = null;

        listApi.add = function (value) {
            if (!head) {
                head = {
                    id: 0,
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

        listApi.remove = function (nodeId) {
            let ptr, ptrPrev;
            function _removeNode() {
                if (ptr === head) {
                    head = ptr.next;
                } else if (ptr === tail) {
                    delete ptrPrev.next;
                    tail = ptrPrev;
                } else if (ptrPrev) {
                    ptrPrev.next = ptr.next;
                    delete ptr.next;
                }

            }

            function _process(currentNode) {
                ptr = currentNode;
                if (ptr.id === nodeId) {
                    _removeNode();
                } else if (ptr.id !== tail.id) {
                    ptrPrev = ptr;
                    ptr = ptr.next;
                    _process(ptr);
                } else {
                    throw Error(`Element with index '${nodeId}' does not exsists.`);
                }
            }

            if (head) {
                _process(head);
            }
        }

        listApi.print = function (callback) {
            function _process(currentNode) {
                callback(currentNode.value, currentNode.id);
                if (currentNode.id !== tail.id) {
                    _process(currentNode.next);
                }
            }
            if (head) {
                _process(head);
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
})();
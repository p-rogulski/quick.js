const struct = (function () {
    const structApi = {};
    structApi.list = function () {
        const listApi = {};
        let _head, _tail = null;

        listApi.add = function (value) {
            if (!_head) {
                _head = {
                    id: 0,
                    value: value,
                };

                _tail = _head;
            } else {
                _tail.next = {
                    id: _tail.id + 1,
                    value: value,
                };

                _tail = _tail.next;
            }
        };

        listApi.addByIndex = function (nodeId, value) {
            let _ptr = _head;
            let _cntr = 0;

            if (!_ptr) {
                _ptr = {
                    id: _cntr,
                };
                _head = _ptr;
                _tail = _head;
            }

            function _process() {
                if (_ptr.id === nodeId) {
                    _ptr.value = value;
                    return;
                }

                _cntr++;
                if (!_ptr.next) {
                    _ptr.next = { id: _cntr, value: undefined };

                    if (_tail.id + 1 === _ptr.next.id) {
                        _tail = _ptr.next;
                    }
                }

                _ptr = _ptr.next;

                _process();
            }

            _process();
        };

        listApi.remove = function (nodeId) {
            let _ptr, _ptrPrev, _cntr;
            function _removeNode() {
                if (_ptr === _head) {
                    _head = _ptr.next;
                } else if (_ptr === _tail) {
                    delete _ptrPrev.next;
                    _tail = _ptrPrev;
                } else if (_ptrPrev) {
                    _ptrPrev.next = _ptr.next;
                    delete _ptr.next;
                }

            }

            function _reindex(){
                _ptr=_head;
                _cntr=0;
                while(_ptr){
                    _ptr.id=_cntr;
                    _ptr=_ptr.next;
                    _cntr++;
                }
            }

            function _process(currentNode) {
                _ptr = currentNode;
                if (_ptr.id === nodeId) {
                    _removeNode();
                    _reindex();
                } else if (_ptr.id !== _tail.id) {
                    _ptrPrev = _ptr;
                    _ptr = _ptr.next;
                    _process(_ptr);
                } else {
                    throw Error(`Element with index '${nodeId}' does not exsists.`);
                }
            }

            if (_head) {
                _process(_head);
            }
        };

        listApi.get = function (id) {
            let _ptr = _head;

            while (_ptr) {
                if (_ptr.id === id) {
                    return _ptr.value;
                }
                _ptr = _ptr.next;
            }

            return undefined;
        };

        listApi.getLength = function () {
            let _ptr = _head;
            let _cntr = 0;

            while (_ptr) {
                _cntr++;
                _ptr = _ptr.next;
            }

            return _cntr;
        };

        listApi.print = function (callback) {
            function _process(currentNode) {
                callback(currentNode.value, currentNode.id);
                if (currentNode.id !== _tail.id) {
                    _process(currentNode.next);
                }
            }
            if (_head) {
                _process(_head);
            }
        };

        return listApi;
    };
    return structApi;
})();

export default struct;
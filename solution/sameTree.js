var isSameTree = function(p, q) {
    return checkF(p, q);

    function checkF(p, q) {
        if (p === null && q === null) return true;
        else if (p === null && q !== null) return false;
        else if (p !== null && q === null) return false;
        else {
            if (p.val != q.val) return false;
            if (!checkF(p.left, q.left)) return false;
            if (!checkF(p.right, q.right)) return false;
            return true;
        }
    }    
};
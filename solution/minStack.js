var MinStack = function () {
    this.st = [];
    this.stMin = [];
};

MinStack.prototype.push = function(x){
    this.st.push(x);
    if (this.stMin.length > 0) {
        var min = this.stMin[this.stMin.length - 1];
        if (x <= min) this.stMin.push(x);
    }
    else {
        this.stMin.push(x);
    }
};

MinStack.prototype.pop = function(){
    if (this.st.length > 0) {
        var num = this.st.pop();
        var min = this.stMin[this.stMin.length - 1];
        if (num == min) this.stMin.pop();
    }
};

MinStack.prototype.top = function () {
    if (this.st.length > 0) {
        return this.st[this.st.length - 1];
    }
    else return null;
};

MinStack.prototype.getMin = function () {
    if (this.stMin.length > 0) {
        var min = this.stMin[this.stMin.length - 1];
        return min;
    }
    else return null;
};
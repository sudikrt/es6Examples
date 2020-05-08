var employee ={
    id:1,
    greet : function () {
        var self = this;
        setTimeout ( () => {console.log (this.id)}, 1000);
    }
}
employee.greet ();
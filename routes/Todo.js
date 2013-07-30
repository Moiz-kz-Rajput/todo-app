/**
 * Created with JetBrains WebStorm.
 * User: Moiz
 * Date: 7/30/13
 * Time: 4:34 PM
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose');
mongoose.connect( 'mongodb://localhost/mydata' );

var schema = {

    Todo: String

}

var Todo = mongoose.model("Todos",schema);
// register/create
exports.register = function (req,res){
    console.log(req.body.Todo);

    var todo1 = new Todo({Todo:req.body.Todo});
    //var stu1 = new Student(req.body);
    todo1.save(function (err,data){
        if(err){
            res.send("Error in save data");
        }
        else {
            //res.send("Saving successful");
            res.redirect("/");
        }
    });
}

exports.findAll = function(req, res) {
    mydata.todos('Todo', function(err, todos) {
      todos.find().toArray(function(err, Todo) {
            res.send(Todo);
        });
    });
};
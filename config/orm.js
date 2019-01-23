let connection = require('./connection');
let orm = {
    select:function(cb){
        const query = 'SELECT * FROM burgers';
        connection.query(query,
            (err,res)=>{
                if(err) throw err;
                cb(res);
            });
    },
    insert: function(burger_name,cb){
        const query = 'INSERT INTO burgers(burger_name,devoured) VALUES(?,0)';
        connection.query(query,[burger_name],
            (err,res) => {
                if(err) throw err;
                cb(res);
            })
    },
    update:function(burger_id,cb){
        const query = 'UPDATE burgers SET devoured= 1 WHERE id= ?';
        connection.query(query,[burger_id],
            (err,res) => {
                if(err) throw err;
                cb(res);
            })
    },
    reset:function(){
        const query = 'UPDATE burgers SET devoured=0';
        connection.query(query,
            (err)=>{
                if(err) throw err;
            })
    }
};
module.exports = orm;
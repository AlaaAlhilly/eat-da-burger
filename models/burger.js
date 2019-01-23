let orm = require('../config/orm');

let burger = {
    select: function(cb) {
        orm.select((res) => {
            cb(res);
        });
    },
    insert: function(burger_name,cb){
        orm.insert(burger_name,(res) =>{
            cb(res);
        });
    },
    update: function(id,cb){
        orm.update(id,(res) => {
            cb(res);
        });
    },
    reset:function(){
        orm.reset();
    }
}
module.exports = burger;
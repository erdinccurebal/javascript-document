'use strict';

const HardFunction = function (users) {
    this.users = users;
    
    this.isAdmin = true;

    this.yazdir = () => {
        return this.users;
    };
    this.getOnlyName = () => {
        return this.users.map(item => item.name )
    }
}
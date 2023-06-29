const assert = require("assert");
const UserContainer = require("../containers/UserContainer")
const User = require("../components/User")
import data from "../data.json"

describe('user', function(){
    let user;
    beforeEach(function(){
        user = new User("neil", "neil@neil.com","neilneil")
        tree = data.trees[0]
    })

})
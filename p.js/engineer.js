// position
const Employee = require("./Employee");

// enginner script
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email, 'Engineer');
        this.gitHub = gitHub;
    }

    getGithub() {
        return this.gitHub;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;

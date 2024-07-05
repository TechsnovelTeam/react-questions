// Explain this code:

// Definitions
type Constructor<T = {}> = new (...args: any[]) => T;
function Activatable<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        isActive = false;

        activate() {
            this.isActive = true;
        }

        deactivate() {
            this.isActive = false;
        }
    };
}

class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

// Usage
const ActivatableUser = Activatable(User);
const user = new ActivatableUser("John Doe");
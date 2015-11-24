// Type definitions for container
// Project: http://www.conlana.com/
// Definitions by: Julio Barrera <https://github.com/juliobarreraa/>, Julio César Barrera
// Definitions: https://github.com/juliobarreraa/DefinitelyTyped

interface Container {
    new():Container;
    make(abstract:any):any;
    singleton(abstract:any, concrete: Function):any;
}

declare var Container: Container;

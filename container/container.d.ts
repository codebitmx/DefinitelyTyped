// Type definitions for container
// Project: http://www.codebit.com/
// Definitions by: Julio Barrera <https://github.com/codebitmx/>, Julio César Barrera
// Definitions: https://github.com/codebitmx/DefinitelyTyped

interface Container {
    new():Container;
    make(abstract:any):any;
    singleton(abstract:any, concrete: Function):any;
}

declare var Container: Container;

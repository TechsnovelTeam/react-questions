// Is this code correct?

interface IPoint {
    x: number;
}

// Note: Uncomment this block of code
/*
type point extends IPoint = {
   x: number;
   y: number
}

type point: IPoint = {
    x: number;
}
*/
function randomizeRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}

interface IrandomizeAxisValues {
    x: {
        value: number
    },
    z: {
        value: number,
        parameter: number
    }
}
function randomizeAxisValues(axis: IrandomizeAxisValues, index: number): IrandomizeAxisValues {
    if(index % 2) {
        axis.x.value *= -1;
    }

    if(index <= axis.z.parameter) {
        axis.z.value *= -1;
    }

    return axis;
}


export {
    randomizeRange,
    randomizeAxisValues
}
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
function randomizeAxisValues(axis: IrandomizeAxisValues): IrandomizeAxisValues {
    if(axis.x.value % 2) {
        axis.x.value *= -1;
    }

    if(axis.z.value <= axis.z.parameter) {
        axis.z.value *= -1;
    }

    return axis;
}


export {
    randomizeRange,
    randomizeAxisValues
}
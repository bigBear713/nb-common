export function nbTick(time: number = 0): Promise<void> {
    return new Promise<void>(resolve => setTimeout(() => resolve(), time));
}
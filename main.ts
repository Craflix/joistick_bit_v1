namespace joistick_bit_v1 {
    /**
     * Address LED
     */
    //%blockId=screenmagic
    //%block="plot at $index"
    //%index.min=0 index.max=25
    export function poltAt(index: number): void {
        index |= 0;
        const x = Math.floor(index / 5);
        const y = Math.floor(index % 5);
        led.plot(x,y);
    }
}
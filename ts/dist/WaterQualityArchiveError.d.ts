import { Context } from './Context';
declare class WaterQualityArchiveError extends Error {
    isWaterQualityArchiveError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { WaterQualityArchiveError };

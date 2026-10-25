import { MeasurementEntity } from './entity/MeasurementEntity';
export type * from './WaterQualityArchiveTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { WaterQualityArchiveEntityBase } from './WaterQualityArchiveEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class WaterQualityArchiveSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Measurement(entopts?: Record<string, any>): MeasurementEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): WaterQualityArchiveSDK;
    tester(testopts?: any, sdkopts?: any): WaterQualityArchiveSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof WaterQualityArchiveSDK;
export { stdutil, config, BaseFeature, WaterQualityArchiveEntityBase, WaterQualityArchiveSDK, SDK, };
export type { DirectResult };

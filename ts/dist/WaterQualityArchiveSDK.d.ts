import { MeasurementEntity } from './entity/MeasurementEntity';
export type * from './WaterQualityArchiveTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { WaterQualityArchiveEntityBase } from './WaterQualityArchiveEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
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
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
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

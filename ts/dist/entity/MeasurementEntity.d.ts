import { WaterQualityArchiveEntityBase } from '../WaterQualityArchiveEntityBase';
import type { WaterQualityArchiveSDK } from '../WaterQualityArchiveSDK';
import type { Control } from '../types';
import type { Measurement, MeasurementListMatch } from '../WaterQualityArchiveTypes';
declare class MeasurementEntity extends WaterQualityArchiveEntityBase<Measurement> {
    constructor(client: WaterQualityArchiveSDK, entopts: any);
    make(this: MeasurementEntity): MeasurementEntity;
    list(this: any, reqmatch?: MeasurementListMatch, ctrl?: Control): Promise<MeasurementEntity[]>;
}
export { MeasurementEntity };

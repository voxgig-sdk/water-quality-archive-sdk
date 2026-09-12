export interface Measurement {
    determinand?: Record<string, any>;
    id?: string;
    purpose?: Record<string, any>;
    result?: number;
    resultQualifier?: Record<string, any>;
    sample?: Record<string, any>;
    samplingPoint?: Record<string, any>;
}
export interface MeasurementListMatch {
    area?: string;
    determinand?: string;
    end_date?: string;
    format?: string;
    limit?: number;
    offset?: number;
    purpose?: string;
    sampling_point?: string;
    start_date?: string;
    water_body?: string;
}

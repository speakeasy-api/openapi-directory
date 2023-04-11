import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const GetVisualCrossingWebServicesRestServicesTimelineLocationStartdateServerList: readonly ["https://weather.visualcrossing.com"];
export declare class GetVisualCrossingWebServicesRestServicesTimelineLocationStartdateRequest extends SpeakeasyBase {
    /**
     * data format of the output either json or CSV
     */
    contentType?: string;
    /**
     * data to include in the output (required for CSV format - days,hours,alerts,current,events )
     */
    include?: string;
    key: string;
    /**
     * Language to use for weather descriptions
     */
    lang?: string;
    location: string;
    startdate: string;
    unitGroup?: string;
}
export declare class GetVisualCrossingWebServicesRestServicesTimelineLocationStartdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

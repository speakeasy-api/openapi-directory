import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const GetVisualCrossingWebServicesRestServicesTimelineLocationServerList: readonly ["https://weather.visualcrossing.com"];
export declare class GetVisualCrossingWebServicesRestServicesTimelineLocationRequest extends SpeakeasyBase {
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
    /**
     * Locaton of interest as an address, partial address or decimal latitude,longtude value
     */
    location: string;
    unitGroup?: string;
}
export declare class GetVisualCrossingWebServicesRestServicesTimelineLocationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

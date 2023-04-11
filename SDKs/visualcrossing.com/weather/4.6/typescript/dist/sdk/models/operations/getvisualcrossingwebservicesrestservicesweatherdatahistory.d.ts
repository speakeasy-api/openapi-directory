import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const GetVisualCrossingWebServicesRestServicesWeatherdataHistoryServerList: readonly ["https://weather.visualcrossing.com"];
export declare class GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest extends SpeakeasyBase {
    aggregateHours?: string;
    allowAsynch?: boolean;
    collectStationContributions?: boolean;
    contentType?: string;
    endDateTime?: string;
    includeNormals?: boolean;
    key?: string;
    locations?: string;
    maxDistance?: string;
    maxStations?: string;
    shortColumnNames?: boolean;
    startDateTime?: string;
    unitGroup?: string;
}
export declare class GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

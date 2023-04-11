import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const GetVisualCrossingWebServicesRestServicesWeatherdataForecastServerList: readonly ["https://weather.visualcrossing.com"];
export declare class GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest extends SpeakeasyBase {
    aggregateHours?: string;
    allowAsynch?: boolean;
    contentType?: string;
    key?: string;
    locations?: string;
    sendAsDatasource?: boolean;
    shortColumnNames?: boolean;
    unitGroup?: string;
}
export declare class GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

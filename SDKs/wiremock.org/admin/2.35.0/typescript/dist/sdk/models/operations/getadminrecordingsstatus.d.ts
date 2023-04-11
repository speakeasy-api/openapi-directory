import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetAdminRecordingsStatus200ApplicationJSONStatusEnum {
    NeverStarted = "NeverStarted",
    Recording = "Recording",
    Stopped = "Stopped"
}
/**
 * Successfully got the record status
 */
export declare class GetAdminRecordingsStatus200ApplicationJSON extends SpeakeasyBase {
    status?: GetAdminRecordingsStatus200ApplicationJSONStatusEnum;
}
export declare class GetAdminRecordingsStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully got the record status
     */
    getAdminRecordingsStatus200ApplicationJSONObject?: GetAdminRecordingsStatus200ApplicationJSON;
}

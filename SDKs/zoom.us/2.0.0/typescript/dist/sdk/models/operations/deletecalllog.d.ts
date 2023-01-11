import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteCallLogPathParams extends SpeakeasyBase {
    callLogId: string;
    userId: string;
}
export declare class DeleteCallLogRequest extends SpeakeasyBase {
    pathParams: DeleteCallLogPathParams;
}
export declare class DeleteCallLogResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    deleteCallLog204ApplicationJSONAny?: any;
}

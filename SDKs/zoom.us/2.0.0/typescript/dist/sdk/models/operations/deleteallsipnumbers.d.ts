import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAllSipNumbersPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class DeleteAllSipNumbersSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DeleteAllSipNumbersRequest extends SpeakeasyBase {
    pathParams: DeleteAllSipNumbersPathParams;
    security: DeleteAllSipNumbersSecurity;
}
export declare class DeleteAllSipNumbersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    deleteAllSipNumbers204ApplicationJSONAny?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteInternalNumberPathParams extends SpeakeasyBase {
    accountId: string;
    numberId: string;
}
export declare class DeleteInternalNumberRequest extends SpeakeasyBase {
    pathParams: DeleteInternalNumberPathParams;
}
export declare class DeleteInternalNumberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    deleteInternalNumber204ApplicationJSONAny?: any;
}

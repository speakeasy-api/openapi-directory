import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteCustomObjectRecordByIdPathParams extends SpeakeasyBase {
    id: string;
    object: string;
}
export declare class DeleteCustomObjectRecordByIdHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: Date;
}
export declare class DeleteCustomObjectRecordByIdRequest extends SpeakeasyBase {
    pathParams: DeleteCustomObjectRecordByIdPathParams;
    headers: DeleteCustomObjectRecordByIdHeaders;
}
export declare class DeleteCustomObjectRecordByIdResponse extends SpeakeasyBase {
    contentType: string;
    deleteCustomObjectRecordByID200ApplicationJSONUriString?: string;
    headers: Record<string, string[]>;
    statusCode: number;
}

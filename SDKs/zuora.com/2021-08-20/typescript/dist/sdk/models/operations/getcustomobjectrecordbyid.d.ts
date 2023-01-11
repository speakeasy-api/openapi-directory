import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomObjectRecordByIdPathParams extends SpeakeasyBase {
    id: string;
    object: string;
}
export declare class GetCustomObjectRecordByIdHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: Date;
}
export declare class GetCustomObjectRecordByIdRequest extends SpeakeasyBase {
    pathParams: GetCustomObjectRecordByIdPathParams;
    headers: GetCustomObjectRecordByIdHeaders;
}
export declare class GetCustomObjectRecordByIdResponse extends SpeakeasyBase {
    commonErrorResponse?: shared.CommonErrorResponse;
    contentType: string;
    customObjectRecordWithAllFields?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}

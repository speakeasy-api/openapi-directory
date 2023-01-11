import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCustomObjectRecordPathParams extends SpeakeasyBase {
    id: string;
    object: string;
}
export declare class PutCustomObjectRecordHeaders extends SpeakeasyBase {
    authorization: string;
    ifMatch?: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: Date;
}
export declare class PutCustomObjectRecordRequest extends SpeakeasyBase {
    pathParams: PutCustomObjectRecordPathParams;
    headers: PutCustomObjectRecordHeaders;
    request: Record<string, any>;
}
export declare class PutCustomObjectRecordResponse extends SpeakeasyBase {
    commonErrorResponse?: shared.CommonErrorResponse;
    contentType: string;
    customObjectRecordWithAllFields?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}

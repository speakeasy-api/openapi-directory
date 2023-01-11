import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchPartialUpdateCustomObjectRecordPathParams extends SpeakeasyBase {
    id: string;
    object: string;
}
export declare class PatchPartialUpdateCustomObjectRecordHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: Date;
}
export declare class PatchPartialUpdateCustomObjectRecordRequest extends SpeakeasyBase {
    pathParams: PatchPartialUpdateCustomObjectRecordPathParams;
    headers: PatchPartialUpdateCustomObjectRecordHeaders;
    request: Record<string, any>;
}
export declare class PatchPartialUpdateCustomObjectRecordResponse extends SpeakeasyBase {
    commonErrorResponse?: shared.CommonErrorResponse;
    contentType: string;
    customObjectRecordWithAllFields?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}

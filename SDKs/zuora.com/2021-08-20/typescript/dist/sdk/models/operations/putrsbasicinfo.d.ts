import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRsBasicInfoPathParams extends SpeakeasyBase {
    rsNumber: string;
}
export declare class PutRsBasicInfoHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutRsBasicInfoRequest extends SpeakeasyBase {
    pathParams: PutRsBasicInfoPathParams;
    headers: PutRsBasicInfoHeaders;
    request: Record<string, any>;
}
export declare class PutRsBasicInfoResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRsPathParams extends SpeakeasyBase {
    rsNumber: string;
}
export declare class DeleteRsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class DeleteRsRequest extends SpeakeasyBase {
    pathParams: DeleteRsPathParams;
    headers: DeleteRsHeaders;
}
export declare class DeleteRsResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}

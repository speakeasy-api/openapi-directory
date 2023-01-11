import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSendUserAccessRequestsPathParams extends SpeakeasyBase {
    username: string;
}
export declare class PutSendUserAccessRequestsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutSendUserAccessRequestsRequest extends SpeakeasyBase {
    pathParams: PutSendUserAccessRequestsPathParams;
    headers: PutSendUserAccessRequestsHeaders;
    request: shared.PutSendUserAccessRequestType;
}
export declare class PutSendUserAccessRequestsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    putSendUserAccessRequestResponseType?: shared.PutSendUserAccessRequestResponseType;
    statusCode: number;
}

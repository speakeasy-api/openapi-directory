import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutAcceptUserAccessPathParams extends SpeakeasyBase {
    username: string;
}
export declare class PutAcceptUserAccessHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutAcceptUserAccessRequest extends SpeakeasyBase {
    pathParams: PutAcceptUserAccessPathParams;
    headers: PutAcceptUserAccessHeaders;
}
export declare class PutAcceptUserAccessResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    putAcceptUserAccessResponseType?: shared.PutAcceptUserAccessResponseType;
    statusCode: number;
}

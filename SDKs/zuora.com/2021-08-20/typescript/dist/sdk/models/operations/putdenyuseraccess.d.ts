import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutDenyUserAccessPathParams extends SpeakeasyBase {
    username: string;
}
export declare class PutDenyUserAccessHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutDenyUserAccessRequest extends SpeakeasyBase {
    pathParams: PutDenyUserAccessPathParams;
    headers: PutDenyUserAccessHeaders;
}
export declare class PutDenyUserAccessResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    putDenyUserAccessResponseType?: shared.PutDenyUserAccessResponseType;
    statusCode: number;
}

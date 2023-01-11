import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostConnectionsHeaders extends SpeakeasyBase {
    contentType: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    apiAccessKeyId: string;
    apiSecretAccessKey: string;
}
export declare class PostConnectionsRequest extends SpeakeasyBase {
    headers: PostConnectionsHeaders;
}
export declare class PostConnectionsResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}

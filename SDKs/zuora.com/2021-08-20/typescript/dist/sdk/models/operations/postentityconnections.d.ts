import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostEntityConnectionsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostEntityConnectionsRequest extends SpeakeasyBase {
    headers: PostEntityConnectionsHeaders;
    request?: shared.PostEntityConnectionsType;
}
export declare class PostEntityConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postEntityConnectionsResponseType?: shared.PostEntityConnectionsResponseType;
    statusCode: number;
}

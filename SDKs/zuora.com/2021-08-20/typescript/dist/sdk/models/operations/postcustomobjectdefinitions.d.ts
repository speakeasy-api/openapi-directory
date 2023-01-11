import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCustomObjectDefinitionsHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: Date;
}
export declare class PostCustomObjectDefinitionsRequest extends SpeakeasyBase {
    headers: PostCustomObjectDefinitionsHeaders;
    request: shared.PostCustomObjectDefinitionsRequest;
}
export declare class PostCustomObjectDefinitionsResponse extends SpeakeasyBase {
    commonErrorResponse?: shared.CommonErrorResponse;
    contentType: string;
    getAllCustomObjectDefinitionsInNamespaceResponse?: shared.GetAllCustomObjectDefinitionsInNamespaceResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}

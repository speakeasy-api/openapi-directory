import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllCustomObjectDefinitionsInNamespaceQueryParams extends SpeakeasyBase {
    select?: shared.GlobalHeaderAuthorizationOAuthEnum;
}
export declare class GetAllCustomObjectDefinitionsInNamespaceHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: Date;
}
export declare class GetAllCustomObjectDefinitionsInNamespaceRequest extends SpeakeasyBase {
    queryParams: GetAllCustomObjectDefinitionsInNamespaceQueryParams;
    headers: GetAllCustomObjectDefinitionsInNamespaceHeaders;
}
export declare class GetAllCustomObjectDefinitionsInNamespaceResponse extends SpeakeasyBase {
    contentType: string;
    getAllCustomObjectDefinitionsInNamespaceResponse?: shared.GetAllCustomObjectDefinitionsInNamespaceResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUpdateCustomObjectDefinitionHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: Date;
}
export declare class PostUpdateCustomObjectDefinitionRequest extends SpeakeasyBase {
    headers: PostUpdateCustomObjectDefinitionHeaders;
    request: shared.MigrationUpdateCustomObjectDefinitionsRequest;
}
export declare class PostUpdateCustomObjectDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    migrationUpdateCustomObjectDefinitionsResponse?: shared.MigrationUpdateCustomObjectDefinitionsResponse;
    statusCode: number;
}

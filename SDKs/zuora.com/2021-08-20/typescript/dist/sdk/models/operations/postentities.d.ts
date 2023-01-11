import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostEntitiesHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostEntitiesRequest extends SpeakeasyBase {
    headers: PostEntitiesHeaders;
    request: shared.CreateEntityType;
}
export declare class PostEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    createEntityResponseType?: shared.CreateEntityResponseType;
    headers: Record<string, string[]>;
    statusCode: number;
}

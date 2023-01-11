import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDocumentPropertiesHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostDocumentPropertiesRequest extends SpeakeasyBase {
    headers: PostDocumentPropertiesHeaders;
    request: shared.PostDocumentPropertiesType;
}
export declare class PostDocumentPropertiesResponse extends SpeakeasyBase {
    contentType: string;
    getDocumentPropertiesResponseType?: shared.GetDocumentPropertiesResponseType;
    headers: Record<string, string[]>;
    statusCode: number;
}

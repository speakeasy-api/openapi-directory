import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCatalogPathParams extends SpeakeasyBase {
    productId: string;
}
export declare class PostCatalogHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostCatalogRequest extends SpeakeasyBase {
    pathParams: PostCatalogPathParams;
    headers: PostCatalogHeaders;
    request: shared.PostCatalogType;
}
export declare class PostCatalogResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}

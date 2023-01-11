import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCatalogQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetCatalogHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: string;
}
export declare class GetCatalogRequest extends SpeakeasyBase {
    queryParams: GetCatalogQueryParams;
    headers: GetCatalogHeaders;
}
export declare class GetCatalogResponse extends SpeakeasyBase {
    contentType: string;
    getCatalogType?: shared.GetCatalogType;
    headers: Record<string, string[]>;
    statusCode: number;
}

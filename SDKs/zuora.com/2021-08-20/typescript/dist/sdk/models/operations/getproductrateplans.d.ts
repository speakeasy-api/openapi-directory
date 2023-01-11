import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductRatePlansPathParams extends SpeakeasyBase {
    productId: string;
}
export declare class GetProductRatePlansQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetProductRatePlansHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetProductRatePlansRequest extends SpeakeasyBase {
    pathParams: GetProductRatePlansPathParams;
    queryParams: GetProductRatePlansQueryParams;
    headers: GetProductRatePlansHeaders;
}
export declare class GetProductRatePlansResponse extends SpeakeasyBase {
    contentType: string;
    getProductRatePlansResponse?: shared.GetProductRatePlansResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}

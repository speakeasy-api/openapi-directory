import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetProductPathParams extends SpeakeasyBase {
    productId: string;
}
export declare class GetProductHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: string;
}
export declare class GetProductRequest extends SpeakeasyBase {
    pathParams: GetProductPathParams;
    headers: GetProductHeaders;
}
export declare class GetProductResponse extends SpeakeasyBase {
    contentType: string;
    getProductType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}

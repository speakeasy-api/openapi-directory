import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const ProductSearchAccessoriesServerList: readonly ["https://entelperu.{environment}.com.br/api/catalog_system/pub/products/crossselling/accessories"];
export declare class ProductSearchAccessoriesRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * Product's unique identifier
     */
    productId: number;
}
export declare class ProductSearchAccessoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

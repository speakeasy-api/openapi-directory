import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiCatalogSystemPubFacetsCategoryCategoryIdRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * Starter page range. These parameters allow the API to be paginated. Take into account that the initial and final pages cannot have a separation superior to 50 pages. Thus, it will be displayed 50 items per page.
     */
    from?: string;
    /**
     * Finisher page range. These parameters allow the API to be paginated. Take into account that the initial and final pages cannot have a separation superior to 50 pages. Thus, it will be displayed 50 items per page.
     */
    to?: string;
    /**
     * Category unique number identifier.
     */
    categoryId: string;
}
/**
 * Object with name and ID of the category's facet.
 */
export declare class GetApiCatalogSystemPubFacetsCategoryCategoryId200ApplicationJSON extends SpeakeasyBase {
    /**
     * Category's facet ID.
     */
    id: number;
    /**
     * Category's facet name.
     */
    name: string;
}
export declare class GetApiCatalogSystemPubFacetsCategoryCategoryIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getApiCatalogSystemPubFacetsCategoryCategoryId200ApplicationJSONObjects?: GetApiCatalogSystemPubFacetsCategoryCategoryId200ApplicationJSON[];
}

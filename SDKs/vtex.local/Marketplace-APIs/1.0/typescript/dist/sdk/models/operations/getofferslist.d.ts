import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetofferslistRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * Name of the VTEX account. Used as part of the URL
     */
    accountName: string;
    /**
     * Environment to use. Used as part of the URL.
     */
    environment: string;
    /**
     * This filter query can be used to filter offers by the criteria described below. It should be filled in by following the format: `fq={{criteriaName}}:{{criteriaValue}}`.
     *
     * @remarks
     *
     * - **productId:** integer of the product ID
     *
     * - **productName:** string of the product's name
     *
     * - **skuId:** integer of the SKU ID
     *
     * - **eanId:** string of the EAN ID
     *
     * - **refId:** string of the Ref ID
     *
     * - **categoryId:** integer of the category ID
     *
     * - **brandId:** integer of the brand ID
     *
     * - **sellerId:** string of the seller ID
     *
     * - **sc:** integer of the sales channel's ID (trade policy in VTEX)
     *
     * Ex: skuId:172
     *
     * Ex: categoryId:13
     *
     * Ex. productName:Product example-123
     */
    fq?: string;
    /**
     * Number of rows included in the response. Each row corresponds to a single offer. The default amount of rows in the response is 1, and the maximum amount is 50. To have more than one offer listed in the response, please add the `rows` parameter with a number greater than 1.
     */
    rows?: number;
    /**
     * Criteria used to sort the list of offers. For sorting values in ascending order, use `asc`, while for descending order, use `desc`. To fill in the field, insert the sorting criteria, followed by 'asc', or 'desc', separated by a comma. You can sort by the following criteria:
     *
     * @remarks
     *
     * - **price:** sorts offers by price. *Ascending* goes from lowest to highest price, while *Descending* goes from highest to lowest price.
     *
     * - **name:** sorts offers by *productName*, in alphabetical order. *Ascending* goes from *A* to *Z*, while *Descending* goes from *Z* to *A*.
     *
     * - **availability:** availability in the sales channel (sc). The default value is 1.
     *
     * Ex. sort=availability,desc
     *
     * Ex. sort=name,asc
     *
     * Ex. price,desc
     */
    sort?: string;
    /**
     * Number corresponding to the row from which the offer list will begin, used for pagination. Filters the list of offers by retrieving the offers starting from the row defined. The default value is 0, if the param is not included in the call.
     */
    start?: number;
}
export declare class GetofferslistGetMatchedOffersResponse extends SpeakeasyBase {
    /**
     * Offer's brand ID that the product belongs to, configured in the Catalog. It should be the marketplace's brand chosen for the offer to be matched with.
     */
    brandId: number;
    /**
     * Offer's Category ID that the product belongs to, configured in the Catalog. It should be the marketplace's category chosen for the offer to be matched with.
     */
    categoryId: number;
    /**
     * Last date the offer was modified.
     */
    lastModified: string;
    /**
     * A string that identifies the seller's product. This is the ID that the marketplace will use for all references to this product.
     */
    productId: string;
    /**
     * Name of the offer's product.
     */
    productName: string;
    /**
     * Array of SKUs in the offer.
     */
    skus: shared.Sku2[];
}
export declare class GetofferslistResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getMatchedOffersResponses?: GetofferslistGetMatchedOffersResponse[];
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class Product extends SpeakeasyBase {
    /**
     * Marketplace's Brand ID that the product belongs to, configured in the Catalog. It should be the brand chosen for the received SKU to be matched with. The brandId is already mapped through the Get Suggestions API. This field is nulled when the inserted value is 0.
     */
    brandId: number;
    /**
     * Marketplace's Category ID that the product belongs to, configured in the Catalog. It should be the category chosen for the received SKU to be matched with. The `categoryId` is already mapped through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion). You can choose to keep the same suggested `categoryID`, or overwrite it with another value in this request. This field is nulled when the inserted value is 0.
     */
    categoryId: number;
    /**
     * Product's description.
     */
    description: string;
    /**
     * Name of the product that will be matched.
     */
    name: string;
    /**
     * This field is optional. Add here any product specifications or details.
     */
    specifications: string;
}

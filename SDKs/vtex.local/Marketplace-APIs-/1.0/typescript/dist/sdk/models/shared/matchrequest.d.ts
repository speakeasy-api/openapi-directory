import { SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";
import { Sku } from "./sku";
export declare class MatchRequest extends SpeakeasyBase {
    /**
     * Define the action you want to apply to each SKU. Values include:
     *
     * @remarks
     *
     * 1. `newproduct`: match the SKU as a new product.
     *
     * 2. `itemMatch`: associate the received SKU to an existing SKU.
     *
     * 3. `productMatch`: associate the received SKU to an existing product.
     *
     * 4. `deny`: deny the received SKU.
     *
     * 5. `pending`: the received SKU requires attention.
     *
     * 6. `incomplete`: the received SKU is lacking information to be matched.
     *
     * 7. `insufficientScore`: the score given by the Matcher to this received SKU doesn't qualify it to be matched.
     *
     * Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.
     */
    matchType: string;
    /**
     * Identifies the matching entity. It can be either VTEX's matcher, or an external matcher developed by partners, for example. The `matcherId`'s value can be obtained through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion) endpoint.
     */
    matcherId: string;
    product?: Product;
    /**
     * In `productMatch` actions, fill in this field on your request to match the item to an existing product in the marketplace.
     */
    productRef?: string;
    /**
     * Matcher rates received SKUs by correlating the data sent by sellers, to existing fields in the marketplace. The calculation of these scores determines whether the product has been:
     *
     * @remarks
     *
     * `Approved`: score equal to or greater than 80 points.
     *
     * `Pending`: from 31 to 79 points.
     *
     * `Denied`: from 0 to 30 points.
     *
     * Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.
     */
    score: string;
    sku?: Sku;
    /**
     * In `itemMatch` actions, fill in this field on your request to match the item to an existing SKU in the marketplace.
     */
    skuRef?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutselleraccountconfigRequest extends SpeakeasyBase {
    /**
     * Mapping of SKU and product Specifications. This object should be sent in the following format for all fields you wish to map:
     *
     * @remarks
     *
     * {specificationName}:{specificationValue},
     *
     * Example:
     *
     * Choose voltage: Voltage,
     *
     * Choose size: Size
     */
    mapping: Record<string, any>;
    /**
     * This field determines the type of approval configuration applied to SKUs received  from a seller. The possible values include:
     *
     * @remarks
     *
     * - `default` where the Matcher reviews the SKU, and approves it based on its score
     *
     * - `manual` for manual approvals through the Received SKU UI or Match API
     *
     * - `autoApprove` for every SKU received from a given seller to be approved automatically, regardless of the Matcher Score.
     */
    matchFlux: string;
    /**
     * A string that identifies the seller in the marketplace. This ID must be created by the marketplace.
     */
    sellerId: string;
}

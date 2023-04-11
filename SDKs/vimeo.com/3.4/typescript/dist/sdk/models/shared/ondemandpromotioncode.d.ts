import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The codes were returned.
 */
export declare class OnDemandPromotionCode extends SpeakeasyBase {
    /**
     * A promotion code that can be redeemed on Vimeo.
     */
    code: string;
    /**
     * A link to redeem the promotion code instantly.
     */
    link: string;
    /**
     * The total amount of times this code can be used.
     */
    maxUses: number;
    /**
     * The number of times that this code has been used.
     */
    uses: number;
}

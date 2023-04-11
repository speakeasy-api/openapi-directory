import { SpeakeasyBase } from "../../../internal/utils";
export declare class SuperFundProduct extends SpeakeasyBase {
    /**
     * The ABN of the Regulated SuperFund
     */
    abn?: string;
    /**
     * The name of the Regulated SuperFund
     */
    productName?: string;
    /**
     * The SPIN of the Regulated SuperFund. This field has been deprecated. New superfunds will not have a SPIN value. The USI field should be used instead of SPIN
     */
    spin?: string;
    /**
     * The USI of the Regulated SuperFund
     */
    usi?: string;
}

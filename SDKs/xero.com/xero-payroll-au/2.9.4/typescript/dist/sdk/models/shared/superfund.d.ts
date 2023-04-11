import { SpeakeasyBase } from "../../../internal/utils";
import { SuperFundTypeEnum } from "./superfundtypeenum";
import { ValidationError } from "./validationerror";
export declare class SuperFundInput extends SpeakeasyBase {
    /**
     * ABN of the self managed super fund
     */
    abn?: string;
    /**
     * The account name for the self managed super fund.
     */
    accountName?: string;
    /**
     * The account number for the self managed super fund.
     */
    accountNumber?: string;
    /**
     * BSB of the self managed super fund
     */
    bsb?: string;
    /**
     * The electronic service address for the self managed super fund.
     */
    electronicServiceAddress?: string;
    /**
     * Some funds assign a unique number to each employer
     */
    employerNumber?: string;
    /**
     * Name of the super fund
     */
    name?: string;
    /**
     * The SPIN of the Regulated SuperFund. This field has been deprecated. It will only be present for legacy superfunds. New superfunds will not have a SPIN value. The USI field should be used instead of SPIN.
     */
    spin?: string;
    /**
     * Xero identifier for a super fund
     */
    superFundID?: string;
    type: SuperFundTypeEnum;
    /**
     * The USI of the Regulated SuperFund
     */
    usi?: string;
    /**
     * Displays array of validation error messages from the API
     */
    validationErrors?: ValidationError[];
}
export declare class SuperFund extends SpeakeasyBase {
    /**
     * ABN of the self managed super fund
     */
    abn?: string;
    /**
     * The account name for the self managed super fund.
     */
    accountName?: string;
    /**
     * The account number for the self managed super fund.
     */
    accountNumber?: string;
    /**
     * BSB of the self managed super fund
     */
    bsb?: string;
    /**
     * The electronic service address for the self managed super fund.
     */
    electronicServiceAddress?: string;
    /**
     * Some funds assign a unique number to each employer
     */
    employerNumber?: string;
    /**
     * Name of the super fund
     */
    name?: string;
    /**
     * The SPIN of the Regulated SuperFund. This field has been deprecated. It will only be present for legacy superfunds. New superfunds will not have a SPIN value. The USI field should be used instead of SPIN.
     */
    spin?: string;
    /**
     * Xero identifier for a super fund
     */
    superFundID?: string;
    type: SuperFundTypeEnum;
    /**
     * The USI of the Regulated SuperFund
     */
    usi?: string;
    /**
     * Last modified timestamp
     */
    updatedDateUTC?: string;
    /**
     * Displays array of validation error messages from the API
     */
    validationErrors?: ValidationError[];
}

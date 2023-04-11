import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReimbursementType extends SpeakeasyBase {
    /**
     * See Accounts
     */
    accountCode?: string;
    /**
     * Is the current record
     */
    currentRecord?: boolean;
    /**
     * Name of the earnings rate (max length = 100)
     */
    name?: string;
    /**
     * Xero identifier
     */
    reimbursementTypeID?: string;
    /**
     * Last modified timestamp
     */
    updatedDateUTC?: string;
}
export declare class ReimbursementTypeInput extends SpeakeasyBase {
    /**
     * See Accounts
     */
    accountCode?: string;
    /**
     * Is the current record
     */
    currentRecord?: boolean;
    /**
     * Name of the earnings rate (max length = 100)
     */
    name?: string;
    /**
     * Xero identifier
     */
    reimbursementTypeID?: string;
}

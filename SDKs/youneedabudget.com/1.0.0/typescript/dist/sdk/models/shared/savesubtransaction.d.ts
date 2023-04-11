import { SpeakeasyBase } from "../../../internal/utils";
export declare class SaveSubTransaction extends SpeakeasyBase {
    /**
     * The subtransaction amount in milliunits format.
     */
    amount: number;
    /**
     * The category for the subtransaction.  Credit Card Payment categories are not permitted and will be ignored if supplied.
     */
    categoryId?: string;
    memo?: string;
    /**
     * The payee for the subtransaction.
     */
    payeeId?: string;
    /**
     * The payee name.  If a `payee_name` value is provided and `payee_id` has a null value, the `payee_name` value will be used to resolve the payee by either (1) a matching payee rename rule (only if import_id is also specified on parent transaction) or (2) a payee with the same name or (3) creation of a new payee.
     */
    payeeName?: string;
}

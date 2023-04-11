import { SpeakeasyBase } from "../../../internal/utils";
export declare class SubTransaction extends SpeakeasyBase {
    /**
     * The subtransaction amount in milliunits format
     */
    amount: number;
    categoryId?: string;
    categoryName?: string;
    /**
     * Whether or not the subtransaction has been deleted.  Deleted subtransactions will only be included in delta requests.
     */
    deleted: boolean;
    id: string;
    memo?: string;
    payeeId?: string;
    payeeName?: string;
    transactionId: string;
    /**
     * If a transfer, the account_id which the subtransaction transfers to
     */
    transferAccountId?: string;
    /**
     * If a transfer, the id of transaction on the other side of the transfer
     */
    transferTransactionId?: string;
}

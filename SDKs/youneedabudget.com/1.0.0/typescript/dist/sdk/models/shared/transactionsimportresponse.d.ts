import { SpeakeasyBase } from "../../../internal/utils";
export declare class TransactionsImportResponseData extends SpeakeasyBase {
    /**
     * The list of transaction ids that were imported.
     */
    transactionIds: string[];
}
/**
 * The request was successful but there were no transactions to import
 */
export declare class TransactionsImportResponse extends SpeakeasyBase {
    data: TransactionsImportResponseData;
}

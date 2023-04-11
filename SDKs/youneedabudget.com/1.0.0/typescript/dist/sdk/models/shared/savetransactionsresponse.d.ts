import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionDetail } from "./transactiondetail";
export declare class SaveTransactionsResponseData extends SpeakeasyBase {
    /**
     * If multiple transactions were specified, a list of import_ids that were not created because of an existing `import_id` found on the same account
     */
    duplicateImportIds?: string[];
    /**
     * The knowledge of the server
     */
    serverKnowledge: number;
    transaction?: TransactionDetail;
    /**
     * The transaction ids that were saved
     */
    transactionIds: string[];
    /**
     * If multiple transactions were specified, the transactions that were saved
     */
    transactions?: TransactionDetail[];
}
/**
 * The transactions were successfully updated
 */
export declare class SaveTransactionsResponse extends SpeakeasyBase {
    data: SaveTransactionsResponseData;
}

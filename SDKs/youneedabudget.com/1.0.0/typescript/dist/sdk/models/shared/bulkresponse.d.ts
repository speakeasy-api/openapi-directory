import { SpeakeasyBase } from "../../../internal/utils";
export declare class BulkResponseDataBulk extends SpeakeasyBase {
    /**
     * If any Transactions were not created because they had an `import_id` matching a transaction already on the same account, the specified import_id(s) will be included in this list.
     */
    duplicateImportIds: string[];
    /**
     * The list of Transaction ids that were created.
     */
    transactionIds: string[];
}
export declare class BulkResponseData extends SpeakeasyBase {
    bulk: BulkResponseDataBulk;
}
/**
 * The bulk request was processed successfully
 */
export declare class BulkResponse extends SpeakeasyBase {
    data: BulkResponseData;
}

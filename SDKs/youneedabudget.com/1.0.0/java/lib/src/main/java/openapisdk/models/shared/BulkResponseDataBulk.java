package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BulkResponseDataBulk {
    @JsonProperty("duplicate_import_ids")
    public String[] duplicateImportIds;
    public BulkResponseDataBulk withDuplicateImportIds(String[] duplicateImportIds) {
        this.duplicateImportIds = duplicateImportIds;
        return this;
    }
    @JsonProperty("transaction_ids")
    public String[] transactionIds;
    public BulkResponseDataBulk withTransactionIds(String[] transactionIds) {
        this.transactionIds = transactionIds;
        return this;
    }
}
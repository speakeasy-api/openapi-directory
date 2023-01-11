package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransactionsImportResponseData {
    @JsonProperty("transaction_ids")
    public String[] transactionIds;
    public TransactionsImportResponseData withTransactionIds(String[] transactionIds) {
        this.transactionIds = transactionIds;
        return this;
    }
}
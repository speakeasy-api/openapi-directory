package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SaveTransactionsResponseData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duplicate_import_ids")
    public String[] duplicateImportIds;
    public SaveTransactionsResponseData withDuplicateImportIds(String[] duplicateImportIds) {
        this.duplicateImportIds = duplicateImportIds;
        return this;
    }
    @JsonProperty("server_knowledge")
    public Long serverKnowledge;
    public SaveTransactionsResponseData withServerKnowledge(Long serverKnowledge) {
        this.serverKnowledge = serverKnowledge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transaction")
    public TransactionDetail transaction;
    public SaveTransactionsResponseData withTransaction(TransactionDetail transaction) {
        this.transaction = transaction;
        return this;
    }
    @JsonProperty("transaction_ids")
    public String[] transactionIds;
    public SaveTransactionsResponseData withTransactionIds(String[] transactionIds) {
        this.transactionIds = transactionIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactions")
    public TransactionDetail[] transactions;
    public SaveTransactionsResponseData withTransactions(TransactionDetail[] transactions) {
        this.transactions = transactions;
        return this;
    }
}
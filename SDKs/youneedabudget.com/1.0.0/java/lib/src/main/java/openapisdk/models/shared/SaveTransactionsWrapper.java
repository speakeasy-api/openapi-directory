package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SaveTransactionsWrapper {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transaction")
    public SaveTransaction transaction;
    public SaveTransactionsWrapper withTransaction(SaveTransaction transaction) {
        this.transaction = transaction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactions")
    public SaveTransaction[] transactions;
    public SaveTransactionsWrapper withTransactions(SaveTransaction[] transactions) {
        this.transactions = transactions;
        return this;
    }
}
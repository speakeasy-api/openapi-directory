package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateTransactionsWrapper {
    @JsonProperty("transactions")
    public UpdateTransaction[] transactions;
    public UpdateTransactionsWrapper withTransactions(UpdateTransaction[] transactions) {
        this.transactions = transactions;
        return this;
    }
}
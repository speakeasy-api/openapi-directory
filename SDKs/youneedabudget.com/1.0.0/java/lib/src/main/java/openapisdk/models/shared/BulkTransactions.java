package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BulkTransactions {
    @JsonProperty("transactions")
    public SaveTransaction[] transactions;
    public BulkTransactions withTransactions(SaveTransaction[] transactions) {
        this.transactions = transactions;
        return this;
    }
}
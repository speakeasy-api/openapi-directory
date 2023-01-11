package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HybridTransactionsResponseData {
    @JsonProperty("transactions")
    public HybridTransaction[] transactions;
    public HybridTransactionsResponseData withTransactions(HybridTransaction[] transactions) {
        this.transactions = transactions;
        return this;
    }
}
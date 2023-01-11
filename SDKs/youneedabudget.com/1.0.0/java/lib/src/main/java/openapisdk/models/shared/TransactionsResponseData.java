package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransactionsResponseData {
    @JsonProperty("server_knowledge")
    public Long serverKnowledge;
    public TransactionsResponseData withServerKnowledge(Long serverKnowledge) {
        this.serverKnowledge = serverKnowledge;
        return this;
    }
    @JsonProperty("transactions")
    public TransactionDetail[] transactions;
    public TransactionsResponseData withTransactions(TransactionDetail[] transactions) {
        this.transactions = transactions;
        return this;
    }
}
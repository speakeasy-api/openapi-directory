package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ScheduledTransactionsResponseData {
    @JsonProperty("scheduled_transactions")
    public ScheduledTransactionDetail[] scheduledTransactions;
    public ScheduledTransactionsResponseData withScheduledTransactions(ScheduledTransactionDetail[] scheduledTransactions) {
        this.scheduledTransactions = scheduledTransactions;
        return this;
    }
    @JsonProperty("server_knowledge")
    public Long serverKnowledge;
    public ScheduledTransactionsResponseData withServerKnowledge(Long serverKnowledge) {
        this.serverKnowledge = serverKnowledge;
        return this;
    }
}
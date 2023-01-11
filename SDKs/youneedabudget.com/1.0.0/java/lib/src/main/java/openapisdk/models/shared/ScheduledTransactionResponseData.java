package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ScheduledTransactionResponseData {
    @JsonProperty("scheduled_transaction")
    public ScheduledTransactionDetail scheduledTransaction;
    public ScheduledTransactionResponseData withScheduledTransaction(ScheduledTransactionDetail scheduledTransaction) {
        this.scheduledTransaction = scheduledTransaction;
        return this;
    }
}
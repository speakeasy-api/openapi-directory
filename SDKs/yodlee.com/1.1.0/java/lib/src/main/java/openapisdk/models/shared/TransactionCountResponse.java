package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransactionCountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transaction")
    public TransactionCount transaction;
    public TransactionCountResponse withTransaction(TransactionCount transaction) {
        this.transaction = transaction;
        return this;
    }
}
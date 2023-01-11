package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutBatchDebitMemosRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debitMemos")
    public BatchDebitMemoType[] debitMemos;
    public PutBatchDebitMemosRequest withDebitMemos(BatchDebitMemoType[] debitMemos) {
        this.debitMemos = debitMemos;
        return this;
    }
}
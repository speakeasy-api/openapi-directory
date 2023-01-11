package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransactionCount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TOTAL")
    public TransactionTotal total;
    public TransactionCount withTotal(TransactionTotal total) {
        this.total = total;
        return this;
    }
}
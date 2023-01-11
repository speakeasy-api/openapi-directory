package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetJournalRunTransactionType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GetJournalRunTransactionTypeTypeEnum type;
    public GetJournalRunTransactionType withType(GetJournalRunTransactionTypeTypeEnum type) {
        this.type = type;
        return this;
    }
}
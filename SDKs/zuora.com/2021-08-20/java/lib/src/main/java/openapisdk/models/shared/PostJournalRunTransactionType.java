package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostJournalRunTransactionType {
    @JsonProperty("type")
    public PostJournalRunTransactionTypeTypeEnum type;
    public PostJournalRunTransactionType withType(PostJournalRunTransactionTypeTypeEnum type) {
        this.type = type;
        return this;
    }
}
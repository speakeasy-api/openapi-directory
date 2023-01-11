package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostJournalRunResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("journalRunNumber")
    public String journalRunNumber;
    public PostJournalRunResponseType withJournalRunNumber(String journalRunNumber) {
        this.journalRunNumber = journalRunNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostJournalRunResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}
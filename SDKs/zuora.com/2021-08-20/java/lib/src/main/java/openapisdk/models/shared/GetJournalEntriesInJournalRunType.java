package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetJournalEntriesInJournalRunType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("journalEntries")
    public java.util.Map<String, Object>[] journalEntries;
    public GetJournalEntriesInJournalRunType withJournalEntries(java.util.Map<String, Object>[] journalEntries) {
        this.journalEntries = journalEntries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetJournalEntriesInJournalRunType withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetJournalEntriesInJournalRunType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}
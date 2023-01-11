package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EntryRefContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entryType")
    public EntryRefContractEntryTypeEnum entryType;
    public EntryRefContract withEntryType(EntryRefContractEntryTypeEnum entryType) {
        this.entryType = entryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public EntryRefContract withId(Integer id) {
        this.id = id;
        return this;
    }
}
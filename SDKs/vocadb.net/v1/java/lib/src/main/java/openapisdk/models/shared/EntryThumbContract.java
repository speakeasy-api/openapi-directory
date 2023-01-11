package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EntryThumbContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entryType")
    public EntryThumbContractEntryTypeEnum entryType;
    public EntryThumbContract withEntryType(EntryThumbContractEntryTypeEnum entryType) {
        this.entryType = entryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public EntryThumbContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mime")
    public String mime;
    public EntryThumbContract withMime(String mime) {
        this.mime = mime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public EntryThumbContract withVersion(Integer version) {
        this.version = version;
        return this;
    }
}
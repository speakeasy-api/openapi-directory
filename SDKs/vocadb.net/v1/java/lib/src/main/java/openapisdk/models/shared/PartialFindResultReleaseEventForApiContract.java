package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PartialFindResultReleaseEventForApiContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public ReleaseEventForApiContract[] items;
    public PartialFindResultReleaseEventForApiContract withItems(ReleaseEventForApiContract[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("term")
    public String term;
    public PartialFindResultReleaseEventForApiContract withTerm(String term) {
        this.term = term;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCount")
    public Integer totalCount;
    public PartialFindResultReleaseEventForApiContract withTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}
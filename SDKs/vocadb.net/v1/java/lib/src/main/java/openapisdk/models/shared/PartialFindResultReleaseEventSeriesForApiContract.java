package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PartialFindResultReleaseEventSeriesForApiContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public ReleaseEventSeriesForApiContract[] items;
    public PartialFindResultReleaseEventSeriesForApiContract withItems(ReleaseEventSeriesForApiContract[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("term")
    public String term;
    public PartialFindResultReleaseEventSeriesForApiContract withTerm(String term) {
        this.term = term;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCount")
    public Integer totalCount;
    public PartialFindResultReleaseEventSeriesForApiContract withTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}
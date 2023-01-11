package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PartialFindResultPvForSongContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public PvForSongContract[] items;
    public PartialFindResultPvForSongContract withItems(PvForSongContract[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("term")
    public String term;
    public PartialFindResultPvForSongContract withTerm(String term) {
        this.term = term;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCount")
    public Integer totalCount;
    public PartialFindResultPvForSongContract withTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PartialFindResultArtistForApiContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public ArtistForApiContract[] items;
    public PartialFindResultArtistForApiContract withItems(ArtistForApiContract[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("term")
    public String term;
    public PartialFindResultArtistForApiContract withTerm(String term) {
        this.term = term;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCount")
    public Integer totalCount;
    public PartialFindResultArtistForApiContract withTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}
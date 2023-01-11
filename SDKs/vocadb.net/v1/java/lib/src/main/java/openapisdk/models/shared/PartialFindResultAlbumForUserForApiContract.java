package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PartialFindResultAlbumForUserForApiContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public AlbumForUserForApiContract[] items;
    public PartialFindResultAlbumForUserForApiContract withItems(AlbumForUserForApiContract[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("term")
    public String term;
    public PartialFindResultAlbumForUserForApiContract withTerm(String term) {
        this.term = term;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCount")
    public Integer totalCount;
    public PartialFindResultAlbumForUserForApiContract withTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}
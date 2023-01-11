package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PartialFindResultCommentForApiContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public CommentForApiContract[] items;
    public PartialFindResultCommentForApiContract withItems(CommentForApiContract[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("term")
    public String term;
    public PartialFindResultCommentForApiContract withTerm(String term) {
        this.term = term;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCount")
    public Integer totalCount;
    public PartialFindResultCommentForApiContract withTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PartialFindResultDiscussionTopicContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public DiscussionTopicContract[] items;
    public PartialFindResultDiscussionTopicContract withItems(DiscussionTopicContract[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("term")
    public String term;
    public PartialFindResultDiscussionTopicContract withTerm(String term) {
        this.term = term;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCount")
    public Integer totalCount;
    public PartialFindResultDiscussionTopicContract withTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PartialFindResultUserMessageContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public UserMessageContract[] items;
    public PartialFindResultUserMessageContract withItems(UserMessageContract[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("term")
    public String term;
    public PartialFindResultUserMessageContract withTerm(String term) {
        this.term = term;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCount")
    public Integer totalCount;
    public PartialFindResultUserMessageContract withTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}
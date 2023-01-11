package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SortByClause {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public SortByClause withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public SortByClauseOrderEnum order;
    public SortByClause withOrder(SortByClauseOrderEnum order) {
        this.order = order;
        return this;
    }
}
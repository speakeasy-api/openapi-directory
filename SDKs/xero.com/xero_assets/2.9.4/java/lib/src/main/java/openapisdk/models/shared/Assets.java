package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Assets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Asset[] items;
    public Assets withItems(Asset[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public Object pagination;
    public Assets withPagination(Object pagination) {
        this.pagination = pagination;
        return this;
    }
}
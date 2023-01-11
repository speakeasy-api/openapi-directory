package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FeedConnections

 * https://developer.xero.com/documentation/bank-feeds-api/feed-connections
**/
public class FeedConnections {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public FeedConnection[] items;
    public FeedConnections withItems(FeedConnection[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public Pagination pagination;
    public FeedConnections withPagination(Pagination pagination) {
        this.pagination = pagination;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSharedLineGroups200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public ListSharedLineGroups200ApplicationJson withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListSharedLineGroups200ApplicationJson withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shared_line_groups")
    public ListSharedLineGroups200ApplicationJsonSharedLineGroups[] sharedLineGroups;
    public ListSharedLineGroups200ApplicationJson withSharedLineGroups(ListSharedLineGroups200ApplicationJsonSharedLineGroups[] sharedLineGroups) {
        this.sharedLineGroups = sharedLineGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public ListSharedLineGroups200ApplicationJson withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}
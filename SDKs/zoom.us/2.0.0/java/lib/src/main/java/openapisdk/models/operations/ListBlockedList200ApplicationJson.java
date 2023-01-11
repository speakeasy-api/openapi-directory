package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBlockedList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blocked_list")
    public ListBlockedList200ApplicationJsonBlockedList[] blockedList;
    public ListBlockedList200ApplicationJson withBlockedList(ListBlockedList200ApplicationJsonBlockedList[] blockedList) {
        this.blockedList = blockedList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public ListBlockedList200ApplicationJson withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListBlockedList200ApplicationJson withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public ListBlockedList200ApplicationJson withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}
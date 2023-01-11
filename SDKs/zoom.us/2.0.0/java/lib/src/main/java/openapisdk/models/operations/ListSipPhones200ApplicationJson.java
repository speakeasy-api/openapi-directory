package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSipPhones200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public ListSipPhones200ApplicationJson withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_count")
    public Long pageCount;
    public ListSipPhones200ApplicationJson withPageCount(Long pageCount) {
        this.pageCount = pageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_number")
    public Long pageNumber;
    public ListSipPhones200ApplicationJson withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListSipPhones200ApplicationJson withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phones")
    public ListSipPhones200ApplicationJsonPhones[] phones;
    public ListSipPhones200ApplicationJson withPhones(ListSipPhones200ApplicationJsonPhones[] phones) {
        this.phones = phones;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public ListSipPhones200ApplicationJson withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}
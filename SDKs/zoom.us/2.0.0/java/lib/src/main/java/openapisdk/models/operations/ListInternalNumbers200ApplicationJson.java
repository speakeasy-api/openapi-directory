package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInternalNumbers200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internal_numbers")
    public ListInternalNumbers200ApplicationJsonInternalNumbers[] internalNumbers;
    public ListInternalNumbers200ApplicationJson withInternalNumbers(ListInternalNumbers200ApplicationJsonInternalNumbers[] internalNumbers) {
        this.internalNumbers = internalNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public ListInternalNumbers200ApplicationJson withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListInternalNumbers200ApplicationJson withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public ListInternalNumbers200ApplicationJson withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}
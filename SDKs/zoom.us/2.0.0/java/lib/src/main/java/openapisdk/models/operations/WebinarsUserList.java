package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarsUserList
 * Pagination Object.
**/
public class WebinarsUserList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public WebinarsUserList withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_count")
    public Long pageCount;
    public WebinarsUserList withPageCount(Long pageCount) {
        this.pageCount = pageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_number")
    public Long pageNumber;
    public WebinarsUserList withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public WebinarsUserList withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public WebinarsUserList withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webinars")
    public WebinarsUserListWebinars[] webinars;
    public WebinarsUserList withWebinars(WebinarsUserListWebinars[] webinars) {
        this.webinars = webinars;
        return this;
    }
}
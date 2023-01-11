package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarAbsenteesRegistrationList
 * Pagination Object.
**/
public class WebinarAbsenteesRegistrationList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public WebinarAbsenteesRegistrationList withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_count")
    public Long pageCount;
    public WebinarAbsenteesRegistrationList withPageCount(Long pageCount) {
        this.pageCount = pageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_number")
    public Long pageNumber;
    public WebinarAbsenteesRegistrationList withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public WebinarAbsenteesRegistrationList withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants")
    public WebinarAbsenteesRegistrationListRegistrants[] registrants;
    public WebinarAbsenteesRegistrationList withRegistrants(WebinarAbsenteesRegistrationListRegistrants[] registrants) {
        this.registrants = registrants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public WebinarAbsenteesRegistrationList withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}
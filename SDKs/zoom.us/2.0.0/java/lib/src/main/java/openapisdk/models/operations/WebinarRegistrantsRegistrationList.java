package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarRegistrantsRegistrationList
 * Pagination Object.
**/
public class WebinarRegistrantsRegistrationList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public WebinarRegistrantsRegistrationList withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_count")
    public Long pageCount;
    public WebinarRegistrantsRegistrationList withPageCount(Long pageCount) {
        this.pageCount = pageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_number")
    public Long pageNumber;
    public WebinarRegistrantsRegistrationList withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public WebinarRegistrantsRegistrationList withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants")
    public WebinarRegistrantsRegistrationListRegistrants[] registrants;
    public WebinarRegistrantsRegistrationList withRegistrants(WebinarRegistrantsRegistrationListRegistrants[] registrants) {
        this.registrants = registrants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public WebinarRegistrantsRegistrationList withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}
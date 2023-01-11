package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingRegistrantsRegistrationList
 * Pagination Object.
**/
public class MeetingRegistrantsRegistrationList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public MeetingRegistrantsRegistrationList withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_count")
    public Long pageCount;
    public MeetingRegistrantsRegistrationList withPageCount(Long pageCount) {
        this.pageCount = pageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_number")
    public Long pageNumber;
    public MeetingRegistrantsRegistrationList withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public MeetingRegistrantsRegistrationList withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants")
    public MeetingRegistrantsRegistrationListRegistrants[] registrants;
    public MeetingRegistrantsRegistrationList withRegistrants(MeetingRegistrantsRegistrationListRegistrants[] registrants) {
        this.registrants = registrants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public MeetingRegistrantsRegistrationList withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}
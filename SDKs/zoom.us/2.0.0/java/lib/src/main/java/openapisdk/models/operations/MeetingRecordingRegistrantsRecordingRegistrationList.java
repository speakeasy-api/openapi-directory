package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingRecordingRegistrantsRecordingRegistrationList
 * Pagination Object.
**/
public class MeetingRecordingRegistrantsRecordingRegistrationList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public MeetingRecordingRegistrantsRecordingRegistrationList withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_count")
    public Long pageCount;
    public MeetingRecordingRegistrantsRecordingRegistrationList withPageCount(Long pageCount) {
        this.pageCount = pageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_number")
    public Long pageNumber;
    public MeetingRecordingRegistrantsRecordingRegistrationList withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public MeetingRecordingRegistrantsRecordingRegistrationList withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants")
    public MeetingRecordingRegistrantsRecordingRegistrationListRegistrants[] registrants;
    public MeetingRecordingRegistrantsRecordingRegistrationList withRegistrants(MeetingRecordingRegistrantsRecordingRegistrationListRegistrants[] registrants) {
        this.registrants = registrants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public MeetingRecordingRegistrantsRecordingRegistrationList withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}
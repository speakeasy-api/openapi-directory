package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DashboardZoomRoomZoomRoomPastMeetings
 * Pagination object.
**/
public class DashboardZoomRoomZoomRoomPastMeetings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public LocalDate from;
    public DashboardZoomRoomZoomRoomPastMeetings withFrom(LocalDate from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meetings")
    public DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics[] meetings;
    public DashboardZoomRoomZoomRoomPastMeetings withMeetings(DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics[] meetings) {
        this.meetings = meetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public DashboardZoomRoomZoomRoomPastMeetings withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_count")
    public Long pageCount;
    public DashboardZoomRoomZoomRoomPastMeetings withPageCount(Long pageCount) {
        this.pageCount = pageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public DashboardZoomRoomZoomRoomPastMeetings withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public LocalDate to;
    public DashboardZoomRoomZoomRoomPastMeetings withTo(LocalDate to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public DashboardZoomRoomZoomRoomPastMeetings withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}
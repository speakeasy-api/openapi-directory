package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportMeetingParticipants200ApplicationJson
 * Pagination object.
**/
public class ReportMeetingParticipants200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public ReportMeetingParticipants200ApplicationJson withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_count")
    public Long pageCount;
    public ReportMeetingParticipants200ApplicationJson withPageCount(Long pageCount) {
        this.pageCount = pageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ReportMeetingParticipants200ApplicationJson withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants")
    public ReportMeetingParticipants200ApplicationJsonParticipants[] participants;
    public ReportMeetingParticipants200ApplicationJson withParticipants(ReportMeetingParticipants200ApplicationJsonParticipants[] participants) {
        this.participants = participants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public ReportMeetingParticipants200ApplicationJson withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}
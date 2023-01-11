package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DashboardMeetingParticipantsQosParticipantQosList
 * Pagination object.
**/
public class DashboardMeetingParticipantsQosParticipantQosList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public DashboardMeetingParticipantsQosParticipantQosList withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_count")
    public Long pageCount;
    public DashboardMeetingParticipantsQosParticipantQosList withPageCount(Long pageCount) {
        this.pageCount = pageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public DashboardMeetingParticipantsQosParticipantQosList withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants")
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQos[] participants;
    public DashboardMeetingParticipantsQosParticipantQosList withParticipants(DashboardMeetingParticipantsQosParticipantQosListParticipantQos[] participants) {
        this.participants = participants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public DashboardMeetingParticipantsQosParticipantQosList withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}
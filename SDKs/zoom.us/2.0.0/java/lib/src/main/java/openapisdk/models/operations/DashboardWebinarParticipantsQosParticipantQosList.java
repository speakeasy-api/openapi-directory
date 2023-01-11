package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DashboardWebinarParticipantsQosParticipantQosList
 * Pagination object.
**/
public class DashboardWebinarParticipantsQosParticipantQosList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public DashboardWebinarParticipantsQosParticipantQosList withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_count")
    public Long pageCount;
    public DashboardWebinarParticipantsQosParticipantQosList withPageCount(Long pageCount) {
        this.pageCount = pageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public DashboardWebinarParticipantsQosParticipantQosList withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants")
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQos[] participants;
    public DashboardWebinarParticipantsQosParticipantQosList withParticipants(DashboardWebinarParticipantsQosParticipantQosListParticipantQos[] participants) {
        this.participants = participants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public DashboardWebinarParticipantsQosParticipantQosList withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}
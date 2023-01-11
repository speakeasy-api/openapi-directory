package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DashboardWebinarParticipantShare200ApplicationJsonParticipantsDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public DashboardWebinarParticipantShare200ApplicationJsonParticipantsDetails withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_time")
    public String endTime;
    public DashboardWebinarParticipantShare200ApplicationJsonParticipantsDetails withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_time")
    public String startTime;
    public DashboardWebinarParticipantShare200ApplicationJsonParticipantsDetails withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}
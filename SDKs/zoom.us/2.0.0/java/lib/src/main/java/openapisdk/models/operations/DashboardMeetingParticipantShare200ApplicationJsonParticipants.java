package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DashboardMeetingParticipantShare200ApplicationJsonParticipants {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public DashboardMeetingParticipantShare200ApplicationJsonParticipantsDetails[] details;
    public DashboardMeetingParticipantShare200ApplicationJsonParticipants withDetails(DashboardMeetingParticipantShare200ApplicationJsonParticipantsDetails[] details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DashboardMeetingParticipantShare200ApplicationJsonParticipants withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public String userId;
    public DashboardMeetingParticipantShare200ApplicationJsonParticipants withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_name")
    public String userName;
    public DashboardMeetingParticipantShare200ApplicationJsonParticipants withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}
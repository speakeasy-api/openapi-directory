package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DashboardWebinarParticipantShare200ApplicationJsonParticipants {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public DashboardWebinarParticipantShare200ApplicationJsonParticipantsDetails[] details;
    public DashboardWebinarParticipantShare200ApplicationJsonParticipants withDetails(DashboardWebinarParticipantShare200ApplicationJsonParticipantsDetails[] details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DashboardWebinarParticipantShare200ApplicationJsonParticipants withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public String userId;
    public DashboardWebinarParticipantShare200ApplicationJsonParticipants withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_name")
    public String userName;
    public DashboardWebinarParticipantShare200ApplicationJsonParticipants withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}
package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DashboardClientFeedbackDetail200ApplicationJsonClientFeedbackDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public DashboardClientFeedbackDetail200ApplicationJsonClientFeedbackDetails withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_id")
    public String meetingId;
    public DashboardClientFeedbackDetail200ApplicationJsonClientFeedbackDetails withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_name")
    public String participantName;
    public DashboardClientFeedbackDetail200ApplicationJsonClientFeedbackDetails withParticipantName(String participantName) {
        this.participantName = participantName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("time")
    public OffsetDateTime time;
    public DashboardClientFeedbackDetail200ApplicationJsonClientFeedbackDetails withTime(OffsetDateTime time) {
        this.time = time;
        return this;
    }
}
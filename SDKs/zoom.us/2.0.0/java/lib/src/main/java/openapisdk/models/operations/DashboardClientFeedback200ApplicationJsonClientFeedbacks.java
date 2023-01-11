package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DashboardClientFeedback200ApplicationJsonClientFeedbacks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedback_id")
    public String feedbackId;
    public DashboardClientFeedback200ApplicationJsonClientFeedbacks withFeedbackId(String feedbackId) {
        this.feedbackId = feedbackId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedback_name")
    public String feedbackName;
    public DashboardClientFeedback200ApplicationJsonClientFeedbacks withFeedbackName(String feedbackName) {
        this.feedbackName = feedbackName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants_count")
    public Long participantsCount;
    public DashboardClientFeedback200ApplicationJsonClientFeedbacks withParticipantsCount(Long participantsCount) {
        this.participantsCount = participantsCount;
        return this;
    }
}
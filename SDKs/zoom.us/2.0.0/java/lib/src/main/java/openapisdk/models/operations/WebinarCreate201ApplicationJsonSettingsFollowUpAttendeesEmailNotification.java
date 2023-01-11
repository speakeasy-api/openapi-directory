package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarCreate201ApplicationJsonSettingsFollowUpAttendeesEmailNotification
 * Send follow-up email to attendees.
**/
public class WebinarCreate201ApplicationJsonSettingsFollowUpAttendeesEmailNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public WebinarCreate201ApplicationJsonSettingsFollowUpAttendeesEmailNotification withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public WebinarCreate201ApplicationJsonSettingsFollowUpAttendeesEmailNotification withType(Long type) {
        this.type = type;
        return this;
    }
}
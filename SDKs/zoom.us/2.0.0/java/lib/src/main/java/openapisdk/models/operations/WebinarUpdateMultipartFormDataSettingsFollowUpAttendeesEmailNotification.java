package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification
 * Send follow-up email to attendees.
**/
public class WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification withType(Long type) {
        this.type = type;
        return this;
    }
}
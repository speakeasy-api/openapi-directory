package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Webinar200ApplicationJsonSettingsFollowUpAttendeesEmailNotification
 * Send follow-up email to attendees.
**/
public class Webinar200ApplicationJsonSettingsFollowUpAttendeesEmailNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public Webinar200ApplicationJsonSettingsFollowUpAttendeesEmailNotification withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public Webinar200ApplicationJsonSettingsFollowUpAttendeesEmailNotification withType(Long type) {
        this.type = type;
        return this;
    }
}
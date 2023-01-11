package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Webinar200ApplicationJsonSettingsFollowUpAbsenteesEmailNotification
 * Send follow-up email to absentees.
**/
public class Webinar200ApplicationJsonSettingsFollowUpAbsenteesEmailNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public Webinar200ApplicationJsonSettingsFollowUpAbsenteesEmailNotification withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public Webinar200ApplicationJsonSettingsFollowUpAbsenteesEmailNotification withType(Long type) {
        this.type = type;
        return this;
    }
}
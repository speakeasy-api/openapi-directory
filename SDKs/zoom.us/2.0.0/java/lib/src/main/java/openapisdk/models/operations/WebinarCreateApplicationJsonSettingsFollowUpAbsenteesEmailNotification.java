package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarCreateApplicationJsonSettingsFollowUpAbsenteesEmailNotification
 * Send follow-up email to absentees.
**/
public class WebinarCreateApplicationJsonSettingsFollowUpAbsenteesEmailNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public WebinarCreateApplicationJsonSettingsFollowUpAbsenteesEmailNotification withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public WebinarCreateApplicationJsonSettingsFollowUpAbsenteesEmailNotification withType(Long type) {
        this.type = type;
        return this;
    }
}
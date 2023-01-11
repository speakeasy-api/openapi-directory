package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarCreate201ApplicationJsonSettingsFollowUpAbsenteesEmailNotification
 * Send follow-up email to absentees.
**/
public class WebinarCreate201ApplicationJsonSettingsFollowUpAbsenteesEmailNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public WebinarCreate201ApplicationJsonSettingsFollowUpAbsenteesEmailNotification withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public WebinarCreate201ApplicationJsonSettingsFollowUpAbsenteesEmailNotification withType(Long type) {
        this.type = type;
        return this;
    }
}
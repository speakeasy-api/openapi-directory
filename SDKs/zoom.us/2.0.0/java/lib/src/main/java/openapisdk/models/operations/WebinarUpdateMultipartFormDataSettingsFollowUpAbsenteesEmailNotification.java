package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification
 * Send follow-up email to absentees.
**/
public class WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification withType(Long type) {
        this.type = type;
        return this;
    }
}
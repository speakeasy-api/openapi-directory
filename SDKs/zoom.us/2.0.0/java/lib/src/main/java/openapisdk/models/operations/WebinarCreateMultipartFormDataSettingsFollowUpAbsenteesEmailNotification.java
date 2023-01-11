package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification
 * Send follow-up email to absentees.
**/
public class WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification withType(Long type) {
        this.type = type;
        return this;
    }
}
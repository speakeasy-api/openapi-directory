package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification
 * Send reminder email to attendees and panelists.
**/
public class WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification withType(Long type) {
        this.type = type;
        return this;
    }
}
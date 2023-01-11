package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarCreate201ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification
 * Send reminder email to attendees and panelists.
**/
public class WebinarCreate201ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public WebinarCreate201ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public WebinarCreate201ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification withType(Long type) {
        this.type = type;
        return this;
    }
}
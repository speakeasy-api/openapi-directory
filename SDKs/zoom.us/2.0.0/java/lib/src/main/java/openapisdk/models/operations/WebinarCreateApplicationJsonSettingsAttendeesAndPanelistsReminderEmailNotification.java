package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarCreateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification
 * Send reminder email to attendees and panelists.
**/
public class WebinarCreateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public WebinarCreateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public WebinarCreateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification withType(Long type) {
        this.type = type;
        return this;
    }
}
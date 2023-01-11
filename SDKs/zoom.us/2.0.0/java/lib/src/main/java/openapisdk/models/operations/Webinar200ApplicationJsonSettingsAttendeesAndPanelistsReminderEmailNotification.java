package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Webinar200ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification
 * Send reminder email to attendees and panelists.
**/
public class Webinar200ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public Webinar200ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public Webinar200ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification withType(Long type) {
        this.type = type;
        return this;
    }
}
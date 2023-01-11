package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_security")
    public UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity meetingSecurity;
    public UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettings withMeetingSecurity(UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity meetingSecurity) {
        this.meetingSecurity = meetingSecurity;
        return this;
    }
}
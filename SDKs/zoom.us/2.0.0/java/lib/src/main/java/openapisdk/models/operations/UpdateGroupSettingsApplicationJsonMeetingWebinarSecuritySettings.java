package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_security")
    public UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity meetingSecurity;
    public UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettings withMeetingSecurity(UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity meetingSecurity) {
        this.meetingSecurity = meetingSecurity;
        return this;
    }
}
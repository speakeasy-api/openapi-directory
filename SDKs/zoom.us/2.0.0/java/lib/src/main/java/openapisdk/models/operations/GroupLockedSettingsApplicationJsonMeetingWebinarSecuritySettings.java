package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_security")
    public GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity meetingSecurity;
    public GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettings withMeetingSecurity(GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity meetingSecurity) {
        this.meetingSecurity = meetingSecurity;
        return this;
    }
}
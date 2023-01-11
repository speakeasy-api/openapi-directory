package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_security")
    public AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity meetingSecurity;
    public AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettings withMeetingSecurity(AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity meetingSecurity) {
        this.meetingSecurity = meetingSecurity;
        return this;
    }
}
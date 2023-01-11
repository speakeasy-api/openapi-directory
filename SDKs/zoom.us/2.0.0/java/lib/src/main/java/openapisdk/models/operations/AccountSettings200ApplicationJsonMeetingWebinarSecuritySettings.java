package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountSettings200ApplicationJsonMeetingWebinarSecuritySettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_security")
    public AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity meetingSecurity;
    public AccountSettings200ApplicationJsonMeetingWebinarSecuritySettings withMeetingSecurity(AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity meetingSecurity) {
        this.meetingSecurity = meetingSecurity;
        return this;
    }
}
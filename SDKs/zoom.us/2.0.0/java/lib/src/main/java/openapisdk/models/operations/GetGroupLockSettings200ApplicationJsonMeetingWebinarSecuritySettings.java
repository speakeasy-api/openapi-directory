package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_security")
    public GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity meetingSecurity;
    public GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettings withMeetingSecurity(GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity meetingSecurity) {
        this.meetingSecurity = meetingSecurity;
        return this;
    }
}
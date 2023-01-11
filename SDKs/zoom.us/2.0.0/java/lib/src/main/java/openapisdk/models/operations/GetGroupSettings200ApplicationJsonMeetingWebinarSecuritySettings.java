package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_security")
    public GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity meetingSecurity;
    public GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettings withMeetingSecurity(GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity meetingSecurity) {
        this.meetingSecurity = meetingSecurity;
        return this;
    }
}
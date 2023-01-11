package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettingsUpdateApplicationJsonUpdateAccountSettingsFeature
 * Account Settings: Feature.
**/
public class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsFeature {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_capacity")
    public Long meetingCapacity;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsFeature withMeetingCapacity(Long meetingCapacity) {
        this.meetingCapacity = meetingCapacity;
        return this;
    }
}
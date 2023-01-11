package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettings200ApplicationJsonAccountSettingsFeature
 * Account Settings: Feature.
**/
public class AccountSettings200ApplicationJsonAccountSettingsFeature {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_capacity")
    public Long meetingCapacity;
    public AccountSettings200ApplicationJsonAccountSettingsFeature withMeetingCapacity(Long meetingCapacity) {
        this.meetingCapacity = meetingCapacity;
        return this;
    }
}
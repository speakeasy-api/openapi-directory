package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature
 * Account Settings: Feature.
**/
public class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_capacity")
    public Long meetingCapacity;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature withMeetingCapacity(Long meetingCapacity) {
        this.meetingCapacity = meetingCapacity;
        return this;
    }
}
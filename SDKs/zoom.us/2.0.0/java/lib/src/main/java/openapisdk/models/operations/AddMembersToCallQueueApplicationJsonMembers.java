package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddMembersToCallQueueApplicationJsonMembers
 * A maximum of 10 members can be added at a time.
**/
public class AddMembersToCallQueueApplicationJsonMembers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("common_area_phone_ids")
    public String[] commonAreaPhoneIds;
    public AddMembersToCallQueueApplicationJsonMembers withCommonAreaPhoneIds(String[] commonAreaPhoneIds) {
        this.commonAreaPhoneIds = commonAreaPhoneIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public AddMembersToCallQueueApplicationJsonMembersUsers[] users;
    public AddMembersToCallQueueApplicationJsonMembers withUsers(AddMembersToCallQueueApplicationJsonMembersUsers[] users) {
        this.users = users;
        return this;
    }
}
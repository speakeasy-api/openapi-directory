package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddMembersToCallQueueMultipartFormDataMembers
 * A maximum of 10 members can be added at a time.
**/
public class AddMembersToCallQueueMultipartFormDataMembers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("common_area_phone_ids")
    public String[] commonAreaPhoneIds;
    public AddMembersToCallQueueMultipartFormDataMembers withCommonAreaPhoneIds(String[] commonAreaPhoneIds) {
        this.commonAreaPhoneIds = commonAreaPhoneIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public AddMembersToCallQueueMultipartFormDataMembersUsers[] users;
    public AddMembersToCallQueueMultipartFormDataMembers withUsers(AddMembersToCallQueueMultipartFormDataMembersUsers[] users) {
        this.users = users;
        return this;
    }
}
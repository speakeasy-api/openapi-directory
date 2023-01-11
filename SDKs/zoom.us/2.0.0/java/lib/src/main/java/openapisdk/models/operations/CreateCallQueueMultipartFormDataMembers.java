package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateCallQueueMultipartFormDataMembers
 * A list of one or more phone users to be included in the call queue. Provide either users or common area phone(s). Provide at least one user in the users object.
**/
public class CreateCallQueueMultipartFormDataMembers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("common_area_phone_ids")
    public String[] commonAreaPhoneIds;
    public CreateCallQueueMultipartFormDataMembers withCommonAreaPhoneIds(String[] commonAreaPhoneIds) {
        this.commonAreaPhoneIds = commonAreaPhoneIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public CreateCallQueueMultipartFormDataMembersUsers[] users;
    public CreateCallQueueMultipartFormDataMembers withUsers(CreateCallQueueMultipartFormDataMembersUsers[] users) {
        this.users = users;
        return this;
    }
}
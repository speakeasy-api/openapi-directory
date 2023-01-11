package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddMembersToSharedLineGroupMultipartFormDataMembers
 * Members can comprise of users on the account as well as common area phones. You can add a maximum of 10 members at once.
**/
public class AddMembersToSharedLineGroupMultipartFormDataMembers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("common_area_phone_ids")
    public String[] commonAreaPhoneIds;
    public AddMembersToSharedLineGroupMultipartFormDataMembers withCommonAreaPhoneIds(String[] commonAreaPhoneIds) {
        this.commonAreaPhoneIds = commonAreaPhoneIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public AddMembersToSharedLineGroupMultipartFormDataMembersUsers[] users;
    public AddMembersToSharedLineGroupMultipartFormDataMembers withUsers(AddMembersToSharedLineGroupMultipartFormDataMembersUsers[] users) {
        this.users = users;
        return this;
    }
}
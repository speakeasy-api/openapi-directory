package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddMembersToSharedLineGroupApplicationJsonMembers
 * Members can comprise of users on the account as well as common area phones. You can add a maximum of 10 members at once.
**/
public class AddMembersToSharedLineGroupApplicationJsonMembers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("common_area_phone_ids")
    public String[] commonAreaPhoneIds;
    public AddMembersToSharedLineGroupApplicationJsonMembers withCommonAreaPhoneIds(String[] commonAreaPhoneIds) {
        this.commonAreaPhoneIds = commonAreaPhoneIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public AddMembersToSharedLineGroupApplicationJsonMembersUsers[] users;
    public AddMembersToSharedLineGroupApplicationJsonMembers withUsers(AddMembersToSharedLineGroupApplicationJsonMembersUsers[] users) {
        this.users = users;
        return this;
    }
}
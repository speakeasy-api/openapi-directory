package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetACallQueue200ApplicationJsonMembers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("common_area_phones")
    public GetACallQueue200ApplicationJsonMembersCommonAreaPhones[] commonAreaPhones;
    public GetACallQueue200ApplicationJsonMembers withCommonAreaPhones(GetACallQueue200ApplicationJsonMembersCommonAreaPhones[] commonAreaPhones) {
        this.commonAreaPhones = commonAreaPhones;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public GetACallQueue200ApplicationJsonMembersUsers[] users;
    public GetACallQueue200ApplicationJsonMembers withUsers(GetACallQueue200ApplicationJsonMembersUsers[] users) {
        this.users = users;
        return this;
    }
}
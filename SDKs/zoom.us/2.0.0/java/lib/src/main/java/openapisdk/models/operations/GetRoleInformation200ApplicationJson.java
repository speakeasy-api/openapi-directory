package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRoleInformation200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetRoleInformation200ApplicationJson withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetRoleInformation200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetRoleInformation200ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privileges")
    public String[] privileges;
    public GetRoleInformation200ApplicationJson withPrivileges(String[] privileges) {
        this.privileges = privileges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sub_account_privileges")
    public GetRoleInformation200ApplicationJsonSubAccountPrivileges subAccountPrivileges;
    public GetRoleInformation200ApplicationJson withSubAccountPrivileges(GetRoleInformation200ApplicationJsonSubAccountPrivileges subAccountPrivileges) {
        this.subAccountPrivileges = subAccountPrivileges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_members")
    public Long totalMembers;
    public GetRoleInformation200ApplicationJson withTotalMembers(Long totalMembers) {
        this.totalMembers = totalMembers;
        return this;
    }
}
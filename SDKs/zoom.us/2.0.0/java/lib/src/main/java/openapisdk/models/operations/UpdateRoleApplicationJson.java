package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateRoleApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateRoleApplicationJson withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdateRoleApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateRoleApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privileges")
    public String[] privileges;
    public UpdateRoleApplicationJson withPrivileges(String[] privileges) {
        this.privileges = privileges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sub_account_privileges")
    public UpdateRoleApplicationJsonSubAccountPrivileges subAccountPrivileges;
    public UpdateRoleApplicationJson withSubAccountPrivileges(UpdateRoleApplicationJsonSubAccountPrivileges subAccountPrivileges) {
        this.subAccountPrivileges = subAccountPrivileges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_members")
    public Long totalMembers;
    public UpdateRoleApplicationJson withTotalMembers(Long totalMembers) {
        this.totalMembers = totalMembers;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RolesRoleList
 * List of Roles
**/
public class RolesRoleList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roles")
    public Object[] roles;
    public RolesRoleList withRoles(Object[] roles) {
        this.roles = roles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public RolesRoleList withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}
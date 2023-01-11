package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RoleMembersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roleId")
    public String roleId;
    public RoleMembersPathParams withRoleId(String roleId) {
        this.roleId = roleId;
        return this;
    }
}
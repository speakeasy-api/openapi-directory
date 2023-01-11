package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddRoleMembersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roleId")
    public String roleId;
    public AddRoleMembersPathParams withRoleId(String roleId) {
        this.roleId = roleId;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRolePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roleId")
    public String roleId;
    public DeleteRolePathParams withRoleId(String roleId) {
        this.roleId = roleId;
        return this;
    }
}
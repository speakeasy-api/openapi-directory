package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRolePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roleId")
    public String roleId;
    public UpdateRolePathParams withRoleId(String roleId) {
        this.roleId = roleId;
        return this;
    }
}
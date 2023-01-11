package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRoleInformationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roleId")
    public String roleId;
    public GetRoleInformationPathParams withRoleId(String roleId) {
        this.roleId = roleId;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RoleMemberDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=memberId")
    public String memberId;
    public RoleMemberDeletePathParams withMemberId(String memberId) {
        this.memberId = memberId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roleId")
    public String roleId;
    public RoleMemberDeletePathParams withRoleId(String roleId) {
        this.roleId = roleId;
        return this;
    }
}
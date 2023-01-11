package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAGroupMemberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public UpdateAGroupMemberPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=memberId")
    public String memberId;
    public UpdateAGroupMemberPathParams withMemberId(String memberId) {
        this.memberId = memberId;
        return this;
    }
}
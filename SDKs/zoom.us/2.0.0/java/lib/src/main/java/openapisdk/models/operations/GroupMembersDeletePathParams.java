package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupMembersDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public GroupMembersDeletePathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=memberId")
    public String memberId;
    public GroupMembersDeletePathParams withMemberId(String memberId) {
        this.memberId = memberId;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupMembersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public GroupMembersPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}
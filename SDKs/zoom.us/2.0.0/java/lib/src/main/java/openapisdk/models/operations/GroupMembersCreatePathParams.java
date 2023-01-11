package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupMembersCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public GroupMembersCreatePathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}
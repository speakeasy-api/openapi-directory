package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImGroupMembersCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public ImGroupMembersCreatePathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}
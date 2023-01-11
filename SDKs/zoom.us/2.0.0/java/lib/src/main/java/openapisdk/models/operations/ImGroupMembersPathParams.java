package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImGroupMembersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public ImGroupMembersPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}
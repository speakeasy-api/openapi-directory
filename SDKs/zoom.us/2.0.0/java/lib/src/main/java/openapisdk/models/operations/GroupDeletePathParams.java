package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public GroupDeletePathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}
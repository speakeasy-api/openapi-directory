package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public GroupUpdatePathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}
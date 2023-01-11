package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public GroupPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}
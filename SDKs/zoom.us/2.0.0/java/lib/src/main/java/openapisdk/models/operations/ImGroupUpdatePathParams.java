package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImGroupUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public ImGroupUpdatePathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}
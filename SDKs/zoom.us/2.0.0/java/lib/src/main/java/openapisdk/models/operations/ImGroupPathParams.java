package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public ImGroupPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImGroupDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public ImGroupDeletePathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}
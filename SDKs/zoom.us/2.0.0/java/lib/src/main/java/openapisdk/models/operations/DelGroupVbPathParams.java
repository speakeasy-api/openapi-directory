package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DelGroupVbPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public DelGroupVbPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}
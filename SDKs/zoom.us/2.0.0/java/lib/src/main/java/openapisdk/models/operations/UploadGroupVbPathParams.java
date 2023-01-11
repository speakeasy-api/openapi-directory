package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadGroupVbPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public UploadGroupVbPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}
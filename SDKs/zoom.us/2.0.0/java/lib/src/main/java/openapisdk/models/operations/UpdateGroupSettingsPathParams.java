package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGroupSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public UpdateGroupSettingsPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}
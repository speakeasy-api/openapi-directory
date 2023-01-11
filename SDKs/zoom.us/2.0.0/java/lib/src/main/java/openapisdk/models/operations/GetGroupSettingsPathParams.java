package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public GetGroupSettingsPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}
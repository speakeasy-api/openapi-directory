package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupLockSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public GetGroupLockSettingsPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}
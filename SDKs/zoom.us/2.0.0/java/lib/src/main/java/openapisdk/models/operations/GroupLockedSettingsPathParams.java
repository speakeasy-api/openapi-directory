package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupLockedSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public GroupLockedSettingsPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}
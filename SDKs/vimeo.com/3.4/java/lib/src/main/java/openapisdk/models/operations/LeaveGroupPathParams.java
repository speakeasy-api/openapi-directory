package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LeaveGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public Double groupId;
    public LeaveGroupPathParams withGroupId(Double groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public LeaveGroupPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}
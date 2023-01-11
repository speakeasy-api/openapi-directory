package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JoinGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public Double groupId;
    public JoinGroupPathParams withGroupId(Double groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public JoinGroupPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}
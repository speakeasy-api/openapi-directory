package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnfollowUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=follow_user_id")
    public Double followUserId;
    public UnfollowUserPathParams withFollowUserId(Double followUserId) {
        this.followUserId = followUserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public UnfollowUserPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}
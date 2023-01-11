package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnfollowUserAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=follow_user_id")
    public Double followUserId;
    public UnfollowUserAlt1PathParams withFollowUserId(Double followUserId) {
        this.followUserId = followUserId;
        return this;
    }
}
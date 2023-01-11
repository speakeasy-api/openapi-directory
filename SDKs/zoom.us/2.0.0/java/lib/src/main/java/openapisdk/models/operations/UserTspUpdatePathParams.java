package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserTspUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tspId")
    public UserTspUpdateTspIdEnum tspId;
    public UserTspUpdatePathParams withTspId(UserTspUpdateTspIdEnum tspId) {
        this.tspId = tspId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UserTspUpdatePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
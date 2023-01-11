package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserTspPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tspId")
    public UserTspTspIdEnum tspId;
    public UserTspPathParams withTspId(UserTspTspIdEnum tspId) {
        this.tspId = tspId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UserTspPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
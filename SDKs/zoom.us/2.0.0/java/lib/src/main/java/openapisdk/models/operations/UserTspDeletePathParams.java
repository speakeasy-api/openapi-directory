package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserTspDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tspId")
    public UserTspDeleteTspIdEnum tspId;
    public UserTspDeletePathParams withTspId(UserTspDeleteTspIdEnum tspId) {
        this.tspId = tspId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UserTspDeletePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UserDeletePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
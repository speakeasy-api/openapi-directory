package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserTspCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UserTspCreatePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UserStatusPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
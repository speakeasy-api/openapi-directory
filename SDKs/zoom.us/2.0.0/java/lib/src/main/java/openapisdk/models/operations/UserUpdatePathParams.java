package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UserUpdatePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
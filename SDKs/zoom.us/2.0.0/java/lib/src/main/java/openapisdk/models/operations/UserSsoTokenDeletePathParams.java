package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserSsoTokenDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UserSsoTokenDeletePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserPasswordPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UserPasswordPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
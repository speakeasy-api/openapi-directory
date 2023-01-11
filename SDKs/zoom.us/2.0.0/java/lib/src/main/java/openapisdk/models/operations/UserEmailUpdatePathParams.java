package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserEmailUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UserEmailUpdatePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
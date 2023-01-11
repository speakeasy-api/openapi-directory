package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UserTokenPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
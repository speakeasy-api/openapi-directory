package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UserPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
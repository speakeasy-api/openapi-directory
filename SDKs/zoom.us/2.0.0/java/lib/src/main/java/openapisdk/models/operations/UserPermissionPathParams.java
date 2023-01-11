package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserPermissionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UserPermissionPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
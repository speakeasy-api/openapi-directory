package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserPicturePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UserPicturePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
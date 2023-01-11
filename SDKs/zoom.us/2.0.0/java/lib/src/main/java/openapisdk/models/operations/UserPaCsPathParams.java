package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserPaCsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UserPaCsPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserSchedulersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UserSchedulersPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
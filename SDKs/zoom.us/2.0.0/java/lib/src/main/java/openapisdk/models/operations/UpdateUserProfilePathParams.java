package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UpdateUserProfilePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
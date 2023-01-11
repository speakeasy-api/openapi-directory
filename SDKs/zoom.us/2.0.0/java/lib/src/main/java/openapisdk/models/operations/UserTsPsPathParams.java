package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserTsPsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UserTsPsPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DelUserVbPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public DelUserVbPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
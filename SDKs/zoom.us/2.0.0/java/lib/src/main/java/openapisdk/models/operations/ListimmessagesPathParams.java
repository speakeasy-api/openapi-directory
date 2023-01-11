package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListimmessagesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public ListimmessagesPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadVBuserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UploadVBuserPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
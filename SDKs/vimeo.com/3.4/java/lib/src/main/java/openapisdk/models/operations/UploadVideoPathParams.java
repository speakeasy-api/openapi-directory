package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadVideoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public UploadVideoPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}
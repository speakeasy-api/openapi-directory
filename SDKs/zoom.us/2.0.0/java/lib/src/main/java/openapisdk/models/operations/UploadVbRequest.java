package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadVbRequest {
    public UploadVbPathParams pathParams;
    public UploadVbRequest withPathParams(UploadVbPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UploadVbRequestBody request;
    public UploadVbRequest withRequest(UploadVbRequestBody request) {
        this.request = request;
        return this;
    }
}
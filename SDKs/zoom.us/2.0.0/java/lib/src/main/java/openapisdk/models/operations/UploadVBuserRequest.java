package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadVBuserRequest {
    public UploadVBuserPathParams pathParams;
    public UploadVBuserRequest withPathParams(UploadVBuserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UploadVBuserRequestBody request;
    public UploadVBuserRequest withRequest(UploadVBuserRequestBody request) {
        this.request = request;
        return this;
    }
}
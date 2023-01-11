package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadGroupVbRequest {
    public UploadGroupVbPathParams pathParams;
    public UploadGroupVbRequest withPathParams(UploadGroupVbPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UploadGroupVbQueryParams queryParams;
    public UploadGroupVbRequest withQueryParams(UploadGroupVbQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UploadGroupVbRequestBody request;
    public UploadGroupVbRequest withRequest(UploadGroupVbRequestBody request) {
        this.request = request;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadVideoRequest {
    public UploadVideoPathParams pathParams;
    public UploadVideoRequest withPathParams(UploadVideoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.video+json")
    public UploadVideoRequestBody request;
    public UploadVideoRequest withRequest(UploadVideoRequestBody request) {
        this.request = request;
        return this;
    }
}
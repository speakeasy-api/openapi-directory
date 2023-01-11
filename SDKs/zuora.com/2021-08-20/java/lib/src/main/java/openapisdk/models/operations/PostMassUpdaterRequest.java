package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMassUpdaterRequest {
    public PostMassUpdaterHeaders headers;
    public PostMassUpdaterRequest withHeaders(PostMassUpdaterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostMassUpdaterRequestBody request;
    public PostMassUpdaterRequest withRequest(PostMassUpdaterRequestBody request) {
        this.request = request;
        return this;
    }
}
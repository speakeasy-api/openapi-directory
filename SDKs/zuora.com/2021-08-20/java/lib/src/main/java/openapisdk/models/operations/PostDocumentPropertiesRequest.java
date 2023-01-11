package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDocumentPropertiesRequest {
    public PostDocumentPropertiesHeaders headers;
    public PostDocumentPropertiesRequest withHeaders(PostDocumentPropertiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostDocumentPropertiesType request;
    public PostDocumentPropertiesRequest withRequest(openapisdk.models.shared.PostDocumentPropertiesType request) {
        this.request = request;
        return this;
    }
}
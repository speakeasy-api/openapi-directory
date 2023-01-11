package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWordListRequest {
    public CreateWordListHeaders headers;
    public CreateWordListRequest withHeaders(CreateWordListHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreateWordListRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}
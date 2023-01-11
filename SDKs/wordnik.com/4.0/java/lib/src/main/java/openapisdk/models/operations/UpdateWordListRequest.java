package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWordListRequest {
    public UpdateWordListPathParams pathParams;
    public UpdateWordListRequest withPathParams(UpdateWordListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateWordListHeaders headers;
    public UpdateWordListRequest withHeaders(UpdateWordListHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public UpdateWordListRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}
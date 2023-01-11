package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddWordsToWordListRequest {
    public AddWordsToWordListPathParams pathParams;
    public AddWordsToWordListRequest withPathParams(AddWordsToWordListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddWordsToWordListHeaders headers;
    public AddWordsToWordListRequest withHeaders(AddWordsToWordListHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object[] request;
    public AddWordsToWordListRequest withRequest(Object[] request) {
        this.request = request;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWordsFromWordListRequest {
    public DeleteWordsFromWordListPathParams pathParams;
    public DeleteWordsFromWordListRequest withPathParams(DeleteWordsFromWordListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteWordsFromWordListHeaders headers;
    public DeleteWordsFromWordListRequest withHeaders(DeleteWordsFromWordListHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object[] request;
    public DeleteWordsFromWordListRequest withRequest(Object[] request) {
        this.request = request;
        return this;
    }
}
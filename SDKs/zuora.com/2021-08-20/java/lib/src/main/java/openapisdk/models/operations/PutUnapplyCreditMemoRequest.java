package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUnapplyCreditMemoRequest {
    public PutUnapplyCreditMemoPathParams pathParams;
    public PutUnapplyCreditMemoRequest withPathParams(PutUnapplyCreditMemoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutUnapplyCreditMemoHeaders headers;
    public PutUnapplyCreditMemoRequest withHeaders(PutUnapplyCreditMemoHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UnapplyCreditMemoType request;
    public PutUnapplyCreditMemoRequest withRequest(openapisdk.models.shared.UnapplyCreditMemoType request) {
        this.request = request;
        return this;
    }
}
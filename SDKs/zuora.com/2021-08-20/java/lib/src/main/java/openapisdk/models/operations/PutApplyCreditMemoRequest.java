package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutApplyCreditMemoRequest {
    public PutApplyCreditMemoPathParams pathParams;
    public PutApplyCreditMemoRequest withPathParams(PutApplyCreditMemoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutApplyCreditMemoHeaders headers;
    public PutApplyCreditMemoRequest withHeaders(PutApplyCreditMemoHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApplyCreditMemoType request;
    public PutApplyCreditMemoRequest withRequest(openapisdk.models.shared.ApplyCreditMemoType request) {
        this.request = request;
        return this;
    }
}
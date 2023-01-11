package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDocumentPropertiesRequest {
    public PutDocumentPropertiesPathParams pathParams;
    public PutDocumentPropertiesRequest withPathParams(PutDocumentPropertiesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutDocumentPropertiesHeaders headers;
    public PutDocumentPropertiesRequest withHeaders(PutDocumentPropertiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutDocumentPropertiesType request;
    public PutDocumentPropertiesRequest withRequest(openapisdk.models.shared.PutDocumentPropertiesType request) {
        this.request = request;
        return this;
    }
}
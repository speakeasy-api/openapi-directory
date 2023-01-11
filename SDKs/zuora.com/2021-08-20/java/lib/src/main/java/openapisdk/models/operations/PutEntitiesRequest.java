package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEntitiesRequest {
    public PutEntitiesPathParams pathParams;
    public PutEntitiesRequest withPathParams(PutEntitiesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutEntitiesHeaders headers;
    public PutEntitiesRequest withHeaders(PutEntitiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateEntityType request;
    public PutEntitiesRequest withRequest(openapisdk.models.shared.UpdateEntityType request) {
        this.request = request;
        return this;
    }
}
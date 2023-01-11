package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePotRequest {
    public UpdatePotPathParams pathParams;
    public UpdatePotRequest withPathParams(UpdatePotPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdatePotHeaders headers;
    public UpdatePotRequest withHeaders(UpdatePotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public UpdatePotRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public UpdatePotSecurity security;
    public UpdatePotRequest withSecurity(UpdatePotSecurity security) {
        this.security = security;
        return this;
    }
}
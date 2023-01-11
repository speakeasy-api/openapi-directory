package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePotRequest {
    public CreatePotHeaders headers;
    public CreatePotRequest withHeaders(CreatePotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreatePotRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public CreatePotSecurity security;
    public CreatePotRequest withSecurity(CreatePotSecurity security) {
        this.security = security;
        return this;
    }
}
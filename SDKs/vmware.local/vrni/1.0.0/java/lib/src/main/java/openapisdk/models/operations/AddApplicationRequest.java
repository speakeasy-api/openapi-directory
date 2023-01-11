package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddApplicationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApplicationRequest request;
    public AddApplicationRequest withRequest(openapisdk.models.shared.ApplicationRequest request) {
        this.request = request;
        return this;
    }
    public AddApplicationSecurity security;
    public AddApplicationRequest withSecurity(AddApplicationSecurity security) {
        this.security = security;
        return this;
    }
}
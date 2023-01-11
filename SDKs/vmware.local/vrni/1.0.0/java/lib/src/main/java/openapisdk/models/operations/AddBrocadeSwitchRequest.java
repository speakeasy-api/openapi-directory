package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddBrocadeSwitchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SwitchDataSourceRequest request;
    public AddBrocadeSwitchRequest withRequest(openapisdk.models.shared.SwitchDataSourceRequest request) {
        this.request = request;
        return this;
    }
    public AddBrocadeSwitchSecurity security;
    public AddBrocadeSwitchRequest withSecurity(AddBrocadeSwitchSecurity security) {
        this.security = security;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddDellSwitchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DellSwitchDataSourceRequest request;
    public AddDellSwitchRequest withRequest(openapisdk.models.shared.DellSwitchDataSourceRequest request) {
        this.request = request;
        return this;
    }
    public AddDellSwitchSecurity security;
    public AddDellSwitchRequest withSecurity(AddDellSwitchSecurity security) {
        this.security = security;
        return this;
    }
}
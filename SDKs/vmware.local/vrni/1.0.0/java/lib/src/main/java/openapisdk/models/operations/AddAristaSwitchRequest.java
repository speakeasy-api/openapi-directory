package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddAristaSwitchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SwitchDataSourceRequest request;
    public AddAristaSwitchRequest withRequest(openapisdk.models.shared.SwitchDataSourceRequest request) {
        this.request = request;
        return this;
    }
    public AddAristaSwitchSecurity security;
    public AddAristaSwitchRequest withSecurity(AddAristaSwitchSecurity security) {
        this.security = security;
        return this;
    }
}
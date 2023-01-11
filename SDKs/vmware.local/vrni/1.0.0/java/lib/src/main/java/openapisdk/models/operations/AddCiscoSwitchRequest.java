package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddCiscoSwitchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CiscoSwitchDataSourceRequest request;
    public AddCiscoSwitchRequest withRequest(openapisdk.models.shared.CiscoSwitchDataSourceRequest request) {
        this.request = request;
        return this;
    }
    public AddCiscoSwitchSecurity security;
    public AddCiscoSwitchRequest withSecurity(AddCiscoSwitchSecurity security) {
        this.security = security;
        return this;
    }
}
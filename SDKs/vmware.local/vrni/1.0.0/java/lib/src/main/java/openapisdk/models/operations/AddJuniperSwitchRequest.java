package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddJuniperSwitchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SwitchDataSourceRequest request;
    public AddJuniperSwitchRequest withRequest(openapisdk.models.shared.SwitchDataSourceRequest request) {
        this.request = request;
        return this;
    }
    public AddJuniperSwitchSecurity security;
    public AddJuniperSwitchRequest withSecurity(AddJuniperSwitchSecurity security) {
        this.security = security;
        return this;
    }
}
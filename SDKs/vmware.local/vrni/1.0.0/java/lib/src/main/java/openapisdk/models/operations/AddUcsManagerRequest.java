package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddUcsManagerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SwitchDataSource request;
    public AddUcsManagerRequest withRequest(openapisdk.models.shared.SwitchDataSource request) {
        this.request = request;
        return this;
    }
    public AddUcsManagerSecurity security;
    public AddUcsManagerRequest withSecurity(AddUcsManagerSecurity security) {
        this.security = security;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddHpovManagerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SwitchDataSource request;
    public AddHpovManagerRequest withRequest(openapisdk.models.shared.SwitchDataSource request) {
        this.request = request;
        return this;
    }
    public AddHpovManagerSecurity security;
    public AddHpovManagerRequest withSecurity(AddHpovManagerSecurity security) {
        this.security = security;
        return this;
    }
}
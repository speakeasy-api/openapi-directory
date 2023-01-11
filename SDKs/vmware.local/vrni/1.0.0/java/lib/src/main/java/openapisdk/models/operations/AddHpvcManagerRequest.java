package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddHpvcManagerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SwitchDataSource request;
    public AddHpvcManagerRequest withRequest(openapisdk.models.shared.SwitchDataSource request) {
        this.request = request;
        return this;
    }
    public AddHpvcManagerSecurity security;
    public AddHpvcManagerRequest withSecurity(AddHpvcManagerSecurity security) {
        this.security = security;
        return this;
    }
}
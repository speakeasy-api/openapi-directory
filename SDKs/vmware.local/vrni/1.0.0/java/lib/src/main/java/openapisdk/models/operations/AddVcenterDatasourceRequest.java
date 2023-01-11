package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVcenterDatasourceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.VCenterDataSourceRequest request;
    public AddVcenterDatasourceRequest withRequest(openapisdk.models.shared.VCenterDataSourceRequest request) {
        this.request = request;
        return this;
    }
    public AddVcenterDatasourceSecurity security;
    public AddVcenterDatasourceRequest withSecurity(AddVcenterDatasourceSecurity security) {
        this.security = security;
        return this;
    }
}
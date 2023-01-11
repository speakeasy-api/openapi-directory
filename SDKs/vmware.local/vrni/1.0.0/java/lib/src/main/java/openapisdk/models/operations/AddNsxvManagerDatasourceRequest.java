package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddNsxvManagerDatasourceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NsxvManagerDataSourceRequest request;
    public AddNsxvManagerDatasourceRequest withRequest(openapisdk.models.shared.NsxvManagerDataSourceRequest request) {
        this.request = request;
        return this;
    }
    public AddNsxvManagerDatasourceSecurity security;
    public AddNsxvManagerDatasourceRequest withSecurity(AddNsxvManagerDatasourceSecurity security) {
        this.security = security;
        return this;
    }
}
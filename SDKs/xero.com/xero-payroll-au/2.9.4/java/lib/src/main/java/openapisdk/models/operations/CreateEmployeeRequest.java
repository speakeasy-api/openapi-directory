package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEmployeeRequest {
    public CreateEmployeeHeaders headers;
    public CreateEmployeeRequest withHeaders(CreateEmployeeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EmployeeInput[] request;
    public CreateEmployeeRequest withRequest(openapisdk.models.shared.EmployeeInput[] request) {
        this.request = request;
        return this;
    }
    public CreateEmployeeSecurity security;
    public CreateEmployeeRequest withSecurity(CreateEmployeeSecurity security) {
        this.security = security;
        return this;
    }
}
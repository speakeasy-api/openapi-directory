package openapisdk.models.operations;



public class GetEmployeeRequest {
    public GetEmployeePathParams pathParams;
    public GetEmployeeRequest withPathParams(GetEmployeePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEmployeeHeaders headers;
    public GetEmployeeRequest withHeaders(GetEmployeeHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetEmployeeSecurity security;
    public GetEmployeeRequest withSecurity(GetEmployeeSecurity security) {
        this.security = security;
        return this;
    }
}
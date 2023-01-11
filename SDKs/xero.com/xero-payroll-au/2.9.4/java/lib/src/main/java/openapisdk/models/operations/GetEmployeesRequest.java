package openapisdk.models.operations;



public class GetEmployeesRequest {
    public GetEmployeesQueryParams queryParams;
    public GetEmployeesRequest withQueryParams(GetEmployeesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetEmployeesHeaders headers;
    public GetEmployeesRequest withHeaders(GetEmployeesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetEmployeesSecurity security;
    public GetEmployeesRequest withSecurity(GetEmployeesSecurity security) {
        this.security = security;
        return this;
    }
}
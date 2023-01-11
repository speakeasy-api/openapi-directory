package openapisdk.models.operations;



public class GetEmployeesResponse {
    public openapisdk.models.shared.ApiException apiException;
    public GetEmployeesResponse withApiException(openapisdk.models.shared.ApiException apiException) {
        this.apiException = apiException;
        return this;
    }
    public String contentType;
    public GetEmployeesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Employees employees;
    public GetEmployeesResponse withEmployees(openapisdk.models.shared.Employees employees) {
        this.employees = employees;
        return this;
    }
    public Long statusCode;
    public GetEmployeesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
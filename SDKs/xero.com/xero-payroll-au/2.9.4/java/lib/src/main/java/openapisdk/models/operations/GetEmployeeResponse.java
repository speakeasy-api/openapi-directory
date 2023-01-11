package openapisdk.models.operations;



public class GetEmployeeResponse {
    public String contentType;
    public GetEmployeeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Employees employees;
    public GetEmployeeResponse withEmployees(openapisdk.models.shared.Employees employees) {
        this.employees = employees;
        return this;
    }
    public Long statusCode;
    public GetEmployeeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
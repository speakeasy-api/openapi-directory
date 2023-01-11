package openapisdk.models.operations;



public class UpdateEmployeeResponse {
    public String contentType;
    public UpdateEmployeeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Employees employees;
    public UpdateEmployeeResponse withEmployees(openapisdk.models.shared.Employees employees) {
        this.employees = employees;
        return this;
    }
    public Long statusCode;
    public UpdateEmployeeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
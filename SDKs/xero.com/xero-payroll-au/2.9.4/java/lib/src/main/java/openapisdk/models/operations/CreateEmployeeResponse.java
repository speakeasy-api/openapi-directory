package openapisdk.models.operations;



public class CreateEmployeeResponse {
    public String contentType;
    public CreateEmployeeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Employees employees;
    public CreateEmployeeResponse withEmployees(openapisdk.models.shared.Employees employees) {
        this.employees = employees;
        return this;
    }
    public Long statusCode;
    public CreateEmployeeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
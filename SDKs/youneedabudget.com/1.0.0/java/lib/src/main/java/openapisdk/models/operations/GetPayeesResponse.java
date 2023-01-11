package openapisdk.models.operations;



public class GetPayeesResponse {
    public String contentType;
    public GetPayeesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetPayeesResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.PayeesResponse payeesResponse;
    public GetPayeesResponse withPayeesResponse(openapisdk.models.shared.PayeesResponse payeesResponse) {
        this.payeesResponse = payeesResponse;
        return this;
    }
    public Long statusCode;
    public GetPayeesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
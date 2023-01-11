package openapisdk.models.operations;



public class GetPayeeByIdResponse {
    public String contentType;
    public GetPayeeByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetPayeeByIdResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.PayeeResponse payeeResponse;
    public GetPayeeByIdResponse withPayeeResponse(openapisdk.models.shared.PayeeResponse payeeResponse) {
        this.payeeResponse = payeeResponse;
        return this;
    }
    public Long statusCode;
    public GetPayeeByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
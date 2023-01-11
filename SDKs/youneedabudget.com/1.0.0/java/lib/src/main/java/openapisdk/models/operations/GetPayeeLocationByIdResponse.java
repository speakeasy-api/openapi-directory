package openapisdk.models.operations;



public class GetPayeeLocationByIdResponse {
    public String contentType;
    public GetPayeeLocationByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetPayeeLocationByIdResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.PayeeLocationResponse payeeLocationResponse;
    public GetPayeeLocationByIdResponse withPayeeLocationResponse(openapisdk.models.shared.PayeeLocationResponse payeeLocationResponse) {
        this.payeeLocationResponse = payeeLocationResponse;
        return this;
    }
    public Long statusCode;
    public GetPayeeLocationByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
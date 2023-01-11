package openapisdk.models.operations;



public class GetPayeeLocationsResponse {
    public String contentType;
    public GetPayeeLocationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetPayeeLocationsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.PayeeLocationsResponse payeeLocationsResponse;
    public GetPayeeLocationsResponse withPayeeLocationsResponse(openapisdk.models.shared.PayeeLocationsResponse payeeLocationsResponse) {
        this.payeeLocationsResponse = payeeLocationsResponse;
        return this;
    }
    public Long statusCode;
    public GetPayeeLocationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
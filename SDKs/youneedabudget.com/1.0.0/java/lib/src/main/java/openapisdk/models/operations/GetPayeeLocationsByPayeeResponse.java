package openapisdk.models.operations;



public class GetPayeeLocationsByPayeeResponse {
    public String contentType;
    public GetPayeeLocationsByPayeeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetPayeeLocationsByPayeeResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.PayeeLocationsResponse payeeLocationsResponse;
    public GetPayeeLocationsByPayeeResponse withPayeeLocationsResponse(openapisdk.models.shared.PayeeLocationsResponse payeeLocationsResponse) {
        this.payeeLocationsResponse = payeeLocationsResponse;
        return this;
    }
    public Long statusCode;
    public GetPayeeLocationsByPayeeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
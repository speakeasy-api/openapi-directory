package openapisdk.models.operations;



public class GetRSbyProductChargeAndBillingAccountResponse {
    public String contentType;
    public GetRSbyProductChargeAndBillingAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetrsDetailsByProductChargeType getrsDetailsByProductChargeType;
    public GetRSbyProductChargeAndBillingAccountResponse withGetrsDetailsByProductChargeType(openapisdk.models.shared.GetrsDetailsByProductChargeType getrsDetailsByProductChargeType) {
        this.getrsDetailsByProductChargeType = getrsDetailsByProductChargeType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRSbyProductChargeAndBillingAccountResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRSbyProductChargeAndBillingAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
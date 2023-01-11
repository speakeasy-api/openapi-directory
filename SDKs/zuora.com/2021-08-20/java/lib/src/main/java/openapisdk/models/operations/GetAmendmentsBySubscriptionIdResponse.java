package openapisdk.models.operations;



public class GetAmendmentsBySubscriptionIdResponse {
    public String contentType;
    public GetAmendmentsBySubscriptionIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAmendmentType getAmendmentType;
    public GetAmendmentsBySubscriptionIdResponse withGetAmendmentType(openapisdk.models.shared.GetAmendmentType getAmendmentType) {
        this.getAmendmentType = getAmendmentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetAmendmentsBySubscriptionIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetAmendmentsBySubscriptionIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
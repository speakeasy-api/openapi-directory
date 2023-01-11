package openapisdk.models.operations;



public class GetCrsByCrsNumberResponse {
    public String contentType;
    public GetCrsByCrsNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetChargeRsDetailType getChargeRSDetailType;
    public GetCrsByCrsNumberResponse withGetChargeRsDetailType(openapisdk.models.shared.GetChargeRsDetailType getChargeRSDetailType) {
        this.getChargeRSDetailType = getChargeRSDetailType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCrsByCrsNumberResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCrsByCrsNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class GetCrsByChargeIdResponse {
    public String contentType;
    public GetCrsByChargeIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetChargeRsDetailType getChargeRSDetailType;
    public GetCrsByChargeIdResponse withGetChargeRsDetailType(openapisdk.models.shared.GetChargeRsDetailType getChargeRSDetailType) {
        this.getChargeRSDetailType = getChargeRSDetailType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCrsByChargeIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCrsByChargeIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class GetMassUpdaterResponse {
    public String contentType;
    public GetMassUpdaterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetMassUpdateType getMassUpdateType;
    public GetMassUpdaterResponse withGetMassUpdateType(openapisdk.models.shared.GetMassUpdateType getMassUpdateType) {
        this.getMassUpdateType = getMassUpdateType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetMassUpdaterResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetMassUpdaterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class PutDenyUserAccessResponse {
    public String contentType;
    public PutDenyUserAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutDenyUserAccessResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PutDenyUserAccessResponseType putDenyUserAccessResponseType;
    public PutDenyUserAccessResponse withPutDenyUserAccessResponseType(openapisdk.models.shared.PutDenyUserAccessResponseType putDenyUserAccessResponseType) {
        this.putDenyUserAccessResponseType = putDenyUserAccessResponseType;
        return this;
    }
    public Long statusCode;
    public PutDenyUserAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
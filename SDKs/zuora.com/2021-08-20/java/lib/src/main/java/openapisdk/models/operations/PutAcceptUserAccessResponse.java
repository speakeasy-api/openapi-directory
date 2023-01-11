package openapisdk.models.operations;



public class PutAcceptUserAccessResponse {
    public String contentType;
    public PutAcceptUserAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutAcceptUserAccessResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PutAcceptUserAccessResponseType putAcceptUserAccessResponseType;
    public PutAcceptUserAccessResponse withPutAcceptUserAccessResponseType(openapisdk.models.shared.PutAcceptUserAccessResponseType putAcceptUserAccessResponseType) {
        this.putAcceptUserAccessResponseType = putAcceptUserAccessResponseType;
        return this;
    }
    public Long statusCode;
    public PutAcceptUserAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
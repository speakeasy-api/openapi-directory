package openapisdk.models.operations;



public class PostRsaSignaturesResponse {
    public String contentType;
    public PostRsaSignaturesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostRsaSignaturesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostrsaSignatureResponseType postrsaSignatureResponseType;
    public PostRsaSignaturesResponse withPostrsaSignatureResponseType(openapisdk.models.shared.PostrsaSignatureResponseType postrsaSignatureResponseType) {
        this.postrsaSignatureResponseType = postrsaSignatureResponseType;
        return this;
    }
    public Long statusCode;
    public PostRsaSignaturesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
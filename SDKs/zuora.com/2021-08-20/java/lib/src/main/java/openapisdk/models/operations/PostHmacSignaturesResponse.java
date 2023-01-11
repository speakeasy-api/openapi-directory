package openapisdk.models.operations;



public class PostHmacSignaturesResponse {
    public String contentType;
    public PostHmacSignaturesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostHmacSignaturesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PosthmacSignatureResponseType posthmacSignatureResponseType;
    public PostHmacSignaturesResponse withPosthmacSignatureResponseType(openapisdk.models.shared.PosthmacSignatureResponseType posthmacSignatureResponseType) {
        this.posthmacSignatureResponseType = posthmacSignatureResponseType;
        return this;
    }
    public Long statusCode;
    public PostHmacSignaturesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
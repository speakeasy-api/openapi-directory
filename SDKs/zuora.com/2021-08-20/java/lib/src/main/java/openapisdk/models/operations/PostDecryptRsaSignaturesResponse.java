package openapisdk.models.operations;



public class PostDecryptRsaSignaturesResponse {
    public String contentType;
    public PostDecryptRsaSignaturesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostDecryptRsaSignaturesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostDecryptResponseType postDecryptResponseType;
    public PostDecryptRsaSignaturesResponse withPostDecryptResponseType(openapisdk.models.shared.PostDecryptResponseType postDecryptResponseType) {
        this.postDecryptResponseType = postDecryptResponseType;
        return this;
    }
    public Long statusCode;
    public PostDecryptRsaSignaturesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
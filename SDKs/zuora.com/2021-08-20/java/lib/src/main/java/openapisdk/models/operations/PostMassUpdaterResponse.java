package openapisdk.models.operations;



public class PostMassUpdaterResponse {
    public String contentType;
    public PostMassUpdaterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostMassUpdaterResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostMassUpdateResponseType postMassUpdateResponseType;
    public PostMassUpdaterResponse withPostMassUpdateResponseType(openapisdk.models.shared.PostMassUpdateResponseType postMassUpdateResponseType) {
        this.postMassUpdateResponseType = postMassUpdateResponseType;
        return this;
    }
    public Long statusCode;
    public PostMassUpdaterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
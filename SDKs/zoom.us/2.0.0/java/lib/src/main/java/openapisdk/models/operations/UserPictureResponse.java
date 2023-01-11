package openapisdk.models.operations;



public class UserPictureResponse {
    public String contentType;
    public UserPictureResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UserPictureResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UserPictureResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
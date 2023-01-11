package openapisdk.models.operations;



public class DeleteRsResponse {
    public openapisdk.models.shared.CommonResponseType commonResponseType;
    public DeleteRsResponse withCommonResponseType(openapisdk.models.shared.CommonResponseType commonResponseType) {
        this.commonResponseType = commonResponseType;
        return this;
    }
    public String contentType;
    public DeleteRsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteRsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteRsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
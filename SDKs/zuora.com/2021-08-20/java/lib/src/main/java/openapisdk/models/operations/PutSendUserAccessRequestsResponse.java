package openapisdk.models.operations;



public class PutSendUserAccessRequestsResponse {
    public String contentType;
    public PutSendUserAccessRequestsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutSendUserAccessRequestsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PutSendUserAccessRequestResponseType putSendUserAccessRequestResponseType;
    public PutSendUserAccessRequestsResponse withPutSendUserAccessRequestResponseType(openapisdk.models.shared.PutSendUserAccessRequestResponseType putSendUserAccessRequestResponseType) {
        this.putSendUserAccessRequestResponseType = putSendUserAccessRequestResponseType;
        return this;
    }
    public Long statusCode;
    public PutSendUserAccessRequestsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
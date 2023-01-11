package openapisdk.models.operations;



public class GetSequenceSetResponse {
    public String contentType;
    public GetSequenceSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSequenceSetResponse getSequenceSetResponse;
    public GetSequenceSetResponse withGetSequenceSetResponse(openapisdk.models.shared.GetSequenceSetResponse getSequenceSetResponse) {
        this.getSequenceSetResponse = getSequenceSetResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetSequenceSetResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetSequenceSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
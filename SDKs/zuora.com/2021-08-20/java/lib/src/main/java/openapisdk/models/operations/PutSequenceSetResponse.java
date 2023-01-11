package openapisdk.models.operations;



public class PutSequenceSetResponse {
    public String contentType;
    public PutSequenceSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutSequenceSetResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PutSequenceSetResponse putSequenceSetResponse;
    public PutSequenceSetResponse withPutSequenceSetResponse(openapisdk.models.shared.PutSequenceSetResponse putSequenceSetResponse) {
        this.putSequenceSetResponse = putSequenceSetResponse;
        return this;
    }
    public Long statusCode;
    public PutSequenceSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
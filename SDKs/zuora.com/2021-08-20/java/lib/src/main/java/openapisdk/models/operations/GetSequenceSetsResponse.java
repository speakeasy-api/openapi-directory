package openapisdk.models.operations;



public class GetSequenceSetsResponse {
    public String contentType;
    public GetSequenceSetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSequenceSetsResponse getSequenceSetsResponse;
    public GetSequenceSetsResponse withGetSequenceSetsResponse(openapisdk.models.shared.GetSequenceSetsResponse getSequenceSetsResponse) {
        this.getSequenceSetsResponse = getSequenceSetsResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetSequenceSetsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetSequenceSetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class GetAllRecordsForCustomObjectTypeResponse {
    public String contentType;
    public GetAllRecordsForCustomObjectTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetAllRecordsForCustomObjectTypeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.QueryCustomObjectRecordsResponse queryCustomObjectRecordsResponse;
    public GetAllRecordsForCustomObjectTypeResponse withQueryCustomObjectRecordsResponse(openapisdk.models.shared.QueryCustomObjectRecordsResponse queryCustomObjectRecordsResponse) {
        this.queryCustomObjectRecordsResponse = queryCustomObjectRecordsResponse;
        return this;
    }
    public Long statusCode;
    public GetAllRecordsForCustomObjectTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
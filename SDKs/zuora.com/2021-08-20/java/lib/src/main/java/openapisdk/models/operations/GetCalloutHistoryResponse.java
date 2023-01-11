package openapisdk.models.operations;



public class GetCalloutHistoryResponse {
    public String contentType;
    public GetCalloutHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCalloutHistoryVOsType getCalloutHistoryVOsType;
    public GetCalloutHistoryResponse withGetCalloutHistoryVOsType(openapisdk.models.shared.GetCalloutHistoryVOsType getCalloutHistoryVOsType) {
        this.getCalloutHistoryVOsType = getCalloutHistoryVOsType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCalloutHistoryResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCalloutHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
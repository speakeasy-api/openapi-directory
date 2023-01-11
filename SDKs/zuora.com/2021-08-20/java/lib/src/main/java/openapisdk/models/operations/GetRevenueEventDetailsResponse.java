package openapisdk.models.operations;



public class GetRevenueEventDetailsResponse {
    public String contentType;
    public GetRevenueEventDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getRevenueEventDetailType;
    public GetRevenueEventDetailsResponse withGetRevenueEventDetailType(java.util.Map<String, Object> getRevenueEventDetailType) {
        this.getRevenueEventDetailType = getRevenueEventDetailType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRevenueEventDetailsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRevenueEventDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
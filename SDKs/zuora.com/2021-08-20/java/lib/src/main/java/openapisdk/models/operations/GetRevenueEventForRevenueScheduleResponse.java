package openapisdk.models.operations;



public class GetRevenueEventForRevenueScheduleResponse {
    public String contentType;
    public GetRevenueEventForRevenueScheduleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRevenueEventDetailsType getRevenueEventDetailsType;
    public GetRevenueEventForRevenueScheduleResponse withGetRevenueEventDetailsType(openapisdk.models.shared.GetRevenueEventDetailsType getRevenueEventDetailsType) {
        this.getRevenueEventDetailsType = getRevenueEventDetailsType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRevenueEventForRevenueScheduleResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRevenueEventForRevenueScheduleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
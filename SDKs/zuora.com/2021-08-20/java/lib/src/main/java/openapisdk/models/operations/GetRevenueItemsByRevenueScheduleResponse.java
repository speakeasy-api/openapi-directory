package openapisdk.models.operations;



public class GetRevenueItemsByRevenueScheduleResponse {
    public String contentType;
    public GetRevenueItemsByRevenueScheduleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRsRevenueItemsType getRsRevenueItemsType;
    public GetRevenueItemsByRevenueScheduleResponse withGetRsRevenueItemsType(openapisdk.models.shared.GetRsRevenueItemsType getRsRevenueItemsType) {
        this.getRsRevenueItemsType = getRsRevenueItemsType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRevenueItemsByRevenueScheduleResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRevenueItemsByRevenueScheduleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
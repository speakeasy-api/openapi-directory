package openapisdk.models.operations;



public class GetRevenueItemsByChargeRevenueSummaryNumberResponse {
    public String contentType;
    public GetRevenueItemsByChargeRevenueSummaryNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRevenueItemsType getRevenueItemsType;
    public GetRevenueItemsByChargeRevenueSummaryNumberResponse withGetRevenueItemsType(openapisdk.models.shared.GetRevenueItemsType getRevenueItemsType) {
        this.getRevenueItemsType = getRevenueItemsType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRevenueItemsByChargeRevenueSummaryNumberResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRevenueItemsByChargeRevenueSummaryNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class GetRevenueItemsByChargeRevenueEventNumberResponse {
    public String contentType;
    public GetRevenueItemsByChargeRevenueEventNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRevenueItemsType getRevenueItemsType;
    public GetRevenueItemsByChargeRevenueEventNumberResponse withGetRevenueItemsType(openapisdk.models.shared.GetRevenueItemsType getRevenueItemsType) {
        this.getRevenueItemsType = getRevenueItemsType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRevenueItemsByChargeRevenueEventNumberResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRevenueItemsByChargeRevenueEventNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
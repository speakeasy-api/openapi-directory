package openapisdk.models.operations;



public class PostRSforSubscChargeResponse {
    public String contentType;
    public PostRSforSubscChargeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostRSforSubscChargeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostRevenueScheduleByChargeResponseType postRevenueScheduleByChargeResponseType;
    public PostRSforSubscChargeResponse withPostRevenueScheduleByChargeResponseType(openapisdk.models.shared.PostRevenueScheduleByChargeResponseType postRevenueScheduleByChargeResponseType) {
        this.postRevenueScheduleByChargeResponseType = postRevenueScheduleByChargeResponseType;
        return this;
    }
    public Long statusCode;
    public PostRSforSubscChargeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class PostRSforInvoiceItemAdjustmentDistributeByDateRangeResponse {
    public String contentType;
    public PostRSforInvoiceItemAdjustmentDistributeByDateRangeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostRSforInvoiceItemAdjustmentDistributeByDateRangeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostRevenueScheduleByTransactionResponseType postRevenueScheduleByTransactionResponseType;
    public PostRSforInvoiceItemAdjustmentDistributeByDateRangeResponse withPostRevenueScheduleByTransactionResponseType(openapisdk.models.shared.PostRevenueScheduleByTransactionResponseType postRevenueScheduleByTransactionResponseType) {
        this.postRevenueScheduleByTransactionResponseType = postRevenueScheduleByTransactionResponseType;
        return this;
    }
    public Long statusCode;
    public PostRSforInvoiceItemAdjustmentDistributeByDateRangeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class PostRSforCreditMemoItemDistributeByDateRangeResponse {
    public String contentType;
    public PostRSforCreditMemoItemDistributeByDateRangeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostRSforCreditMemoItemDistributeByDateRangeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostRevenueScheduleByTransactionResponseType postRevenueScheduleByTransactionResponseType;
    public PostRSforCreditMemoItemDistributeByDateRangeResponse withPostRevenueScheduleByTransactionResponseType(openapisdk.models.shared.PostRevenueScheduleByTransactionResponseType postRevenueScheduleByTransactionResponseType) {
        this.postRevenueScheduleByTransactionResponseType = postRevenueScheduleByTransactionResponseType;
        return this;
    }
    public Long statusCode;
    public PostRSforCreditMemoItemDistributeByDateRangeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
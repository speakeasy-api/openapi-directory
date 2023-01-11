package openapisdk.models.operations;



public class GetTransactionsResponse {
    public String contentType;
    public GetTransactionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTransactionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TransactionResponse transactionResponse;
    public GetTransactionsResponse withTransactionResponse(openapisdk.models.shared.TransactionResponse transactionResponse) {
        this.transactionResponse = transactionResponse;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public GetTransactionsResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}
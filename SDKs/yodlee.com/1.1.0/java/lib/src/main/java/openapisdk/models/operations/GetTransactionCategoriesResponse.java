package openapisdk.models.operations;



public class GetTransactionCategoriesResponse {
    public String contentType;
    public GetTransactionCategoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTransactionCategoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TransactionCategoryResponse transactionCategoryResponse;
    public GetTransactionCategoriesResponse withTransactionCategoryResponse(openapisdk.models.shared.TransactionCategoryResponse transactionCategoryResponse) {
        this.transactionCategoryResponse = transactionCategoryResponse;
        return this;
    }
}
package openapisdk.models.operations;



public class ImportTransactionsResponse {
    public String contentType;
    public ImportTransactionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public ImportTransactionsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public ImportTransactionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TransactionsImportResponse transactionsImportResponse;
    public ImportTransactionsResponse withTransactionsImportResponse(openapisdk.models.shared.TransactionsImportResponse transactionsImportResponse) {
        this.transactionsImportResponse = transactionsImportResponse;
        return this;
    }
}
package openapisdk.models.operations;



public class GetStatementsResponse {
    public String contentType;
    public GetStatementsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.StatementResponse statementResponse;
    public GetStatementsResponse withStatementResponse(openapisdk.models.shared.StatementResponse statementResponse) {
        this.statementResponse = statementResponse;
        return this;
    }
    public Long statusCode;
    public GetStatementsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public GetStatementsResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}
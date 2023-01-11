package openapisdk.models.operations;



public class CreateStatementsResponse {
    public String contentType;
    public CreateStatementsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public CreateStatementsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Statements statements;
    public CreateStatementsResponse withStatements(openapisdk.models.shared.Statements statements) {
        this.statements = statements;
        return this;
    }
    public Long statusCode;
    public CreateStatementsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
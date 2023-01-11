package openapisdk.models.operations;



public class GetStatementsResponse {
    public String contentType;
    public GetStatementsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Statements statements;
    public GetStatementsResponse withStatements(openapisdk.models.shared.Statements statements) {
        this.statements = statements;
        return this;
    }
    public Long statusCode;
    public GetStatementsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
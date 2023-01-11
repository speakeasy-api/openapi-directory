package openapisdk.models.operations;



public class GetStatementResponse {
    public String contentType;
    public GetStatementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Statement statement;
    public GetStatementResponse withStatement(openapisdk.models.shared.Statement statement) {
        this.statement = statement;
        return this;
    }
    public Long statusCode;
    public GetStatementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
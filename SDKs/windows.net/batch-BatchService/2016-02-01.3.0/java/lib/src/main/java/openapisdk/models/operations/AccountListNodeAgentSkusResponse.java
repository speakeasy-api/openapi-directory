package openapisdk.models.operations;



public class AccountListNodeAgentSkusResponse {
    public Object accountListNodeAgentSkusResult;
    public AccountListNodeAgentSkusResponse withAccountListNodeAgentSkusResult(Object accountListNodeAgentSkusResult) {
        this.accountListNodeAgentSkusResult = accountListNodeAgentSkusResult;
        return this;
    }
    public Object batchError;
    public AccountListNodeAgentSkusResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public AccountListNodeAgentSkusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AccountListNodeAgentSkusResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AccountListNodeAgentSkusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
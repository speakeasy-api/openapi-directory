package openapisdk.models.operations;



public class PutRevProAccountingCodesResponse {
    public String contentType;
    public PutRevProAccountingCodesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutRevProAccountingCodesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PutRevproAccCodeResponse putRevproAccCodeResponse;
    public PutRevProAccountingCodesResponse withPutRevproAccCodeResponse(openapisdk.models.shared.PutRevproAccCodeResponse putRevproAccCodeResponse) {
        this.putRevproAccCodeResponse = putRevproAccCodeResponse;
        return this;
    }
    public Long statusCode;
    public PutRevProAccountingCodesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
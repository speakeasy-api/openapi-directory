package openapisdk.models.operations;



public class PutBatchUpdateInvoicesResponse {
    public openapisdk.models.shared.CommonResponseType commonResponseType;
    public PutBatchUpdateInvoicesResponse withCommonResponseType(openapisdk.models.shared.CommonResponseType commonResponseType) {
        this.commonResponseType = commonResponseType;
        return this;
    }
    public String contentType;
    public PutBatchUpdateInvoicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutBatchUpdateInvoicesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutBatchUpdateInvoicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
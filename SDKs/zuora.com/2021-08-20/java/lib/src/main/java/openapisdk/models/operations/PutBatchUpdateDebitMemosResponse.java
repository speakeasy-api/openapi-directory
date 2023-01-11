package openapisdk.models.operations;



public class PutBatchUpdateDebitMemosResponse {
    public openapisdk.models.shared.CommonResponseType commonResponseType;
    public PutBatchUpdateDebitMemosResponse withCommonResponseType(openapisdk.models.shared.CommonResponseType commonResponseType) {
        this.commonResponseType = commonResponseType;
        return this;
    }
    public String contentType;
    public PutBatchUpdateDebitMemosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutBatchUpdateDebitMemosResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutBatchUpdateDebitMemosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
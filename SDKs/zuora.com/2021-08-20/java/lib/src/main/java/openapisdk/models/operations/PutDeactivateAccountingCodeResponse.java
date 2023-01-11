package openapisdk.models.operations;



public class PutDeactivateAccountingCodeResponse {
    public openapisdk.models.shared.CommonResponseType commonResponseType;
    public PutDeactivateAccountingCodeResponse withCommonResponseType(openapisdk.models.shared.CommonResponseType commonResponseType) {
        this.commonResponseType = commonResponseType;
        return this;
    }
    public String contentType;
    public PutDeactivateAccountingCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutDeactivateAccountingCodeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutDeactivateAccountingCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
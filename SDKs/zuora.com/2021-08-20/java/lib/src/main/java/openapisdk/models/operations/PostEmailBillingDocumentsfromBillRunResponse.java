package openapisdk.models.operations;



public class PostEmailBillingDocumentsfromBillRunResponse {
    public openapisdk.models.shared.CommonResponseType commonResponseType;
    public PostEmailBillingDocumentsfromBillRunResponse withCommonResponseType(openapisdk.models.shared.CommonResponseType commonResponseType) {
        this.commonResponseType = commonResponseType;
        return this;
    }
    public String contentType;
    public PostEmailBillingDocumentsfromBillRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostEmailBillingDocumentsfromBillRunResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostEmailBillingDocumentsfromBillRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
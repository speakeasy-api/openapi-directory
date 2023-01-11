package openapisdk.models.operations;



public class PutPendingCloseAccountingPeriodResponse {
    public openapisdk.models.shared.CommonResponseType commonResponseType;
    public PutPendingCloseAccountingPeriodResponse withCommonResponseType(openapisdk.models.shared.CommonResponseType commonResponseType) {
        this.commonResponseType = commonResponseType;
        return this;
    }
    public String contentType;
    public PutPendingCloseAccountingPeriodResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutPendingCloseAccountingPeriodResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutPendingCloseAccountingPeriodResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
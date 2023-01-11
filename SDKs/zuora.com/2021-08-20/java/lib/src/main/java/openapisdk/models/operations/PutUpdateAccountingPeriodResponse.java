package openapisdk.models.operations;



public class PutUpdateAccountingPeriodResponse {
    public openapisdk.models.shared.CommonResponseType commonResponseType;
    public PutUpdateAccountingPeriodResponse withCommonResponseType(openapisdk.models.shared.CommonResponseType commonResponseType) {
        this.commonResponseType = commonResponseType;
        return this;
    }
    public String contentType;
    public PutUpdateAccountingPeriodResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutUpdateAccountingPeriodResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutUpdateAccountingPeriodResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
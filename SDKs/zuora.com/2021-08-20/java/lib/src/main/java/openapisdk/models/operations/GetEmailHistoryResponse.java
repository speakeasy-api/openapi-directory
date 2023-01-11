package openapisdk.models.operations;



public class GetEmailHistoryResponse {
    public String contentType;
    public GetEmailHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEmailHistoryVOsType getEmailHistoryVOsType;
    public GetEmailHistoryResponse withGetEmailHistoryVOsType(openapisdk.models.shared.GetEmailHistoryVOsType getEmailHistoryVOsType) {
        this.getEmailHistoryVOsType = getEmailHistoryVOsType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEmailHistoryResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEmailHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
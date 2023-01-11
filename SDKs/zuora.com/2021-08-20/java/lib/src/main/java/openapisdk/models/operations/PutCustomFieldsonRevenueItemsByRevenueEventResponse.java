package openapisdk.models.operations;



public class PutCustomFieldsonRevenueItemsByRevenueEventResponse {
    public openapisdk.models.shared.CommonResponseType commonResponseType;
    public PutCustomFieldsonRevenueItemsByRevenueEventResponse withCommonResponseType(openapisdk.models.shared.CommonResponseType commonResponseType) {
        this.commonResponseType = commonResponseType;
        return this;
    }
    public String contentType;
    public PutCustomFieldsonRevenueItemsByRevenueEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutCustomFieldsonRevenueItemsByRevenueEventResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutCustomFieldsonRevenueItemsByRevenueEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class PutCustomFieldsonRevenueItemsByRevenueScheduleResponse {
    public openapisdk.models.shared.CommonResponseType commonResponseType;
    public PutCustomFieldsonRevenueItemsByRevenueScheduleResponse withCommonResponseType(openapisdk.models.shared.CommonResponseType commonResponseType) {
        this.commonResponseType = commonResponseType;
        return this;
    }
    public String contentType;
    public PutCustomFieldsonRevenueItemsByRevenueScheduleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutCustomFieldsonRevenueItemsByRevenueScheduleResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutCustomFieldsonRevenueItemsByRevenueScheduleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
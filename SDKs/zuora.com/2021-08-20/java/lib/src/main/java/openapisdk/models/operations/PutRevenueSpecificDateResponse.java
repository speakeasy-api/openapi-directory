package openapisdk.models.operations;



public class PutRevenueSpecificDateResponse {
    public String contentType;
    public PutRevenueSpecificDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutRevenueSpecificDateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PutRevenueScheduleResponseType putRevenueScheduleResponseType;
    public PutRevenueSpecificDateResponse withPutRevenueScheduleResponseType(openapisdk.models.shared.PutRevenueScheduleResponseType putRevenueScheduleResponseType) {
        this.putRevenueScheduleResponseType = putRevenueScheduleResponseType;
        return this;
    }
    public Long statusCode;
    public PutRevenueSpecificDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
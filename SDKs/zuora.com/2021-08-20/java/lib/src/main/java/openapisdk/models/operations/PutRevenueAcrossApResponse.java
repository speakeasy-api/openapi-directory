package openapisdk.models.operations;



public class PutRevenueAcrossApResponse {
    public String contentType;
    public PutRevenueAcrossApResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutRevenueAcrossApResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PutRevenueScheduleResponseType putRevenueScheduleResponseType;
    public PutRevenueAcrossApResponse withPutRevenueScheduleResponseType(openapisdk.models.shared.PutRevenueScheduleResponseType putRevenueScheduleResponseType) {
        this.putRevenueScheduleResponseType = putRevenueScheduleResponseType;
        return this;
    }
    public Long statusCode;
    public PutRevenueAcrossApResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
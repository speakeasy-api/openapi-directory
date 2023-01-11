package openapisdk.models.operations;



public class PutRevenueByRecognitionStartandEndDatesResponse {
    public String contentType;
    public PutRevenueByRecognitionStartandEndDatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutRevenueByRecognitionStartandEndDatesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PutRevenueScheduleResponseType putRevenueScheduleResponseType;
    public PutRevenueByRecognitionStartandEndDatesResponse withPutRevenueScheduleResponseType(openapisdk.models.shared.PutRevenueScheduleResponseType putRevenueScheduleResponseType) {
        this.putRevenueScheduleResponseType = putRevenueScheduleResponseType;
        return this;
    }
    public Long statusCode;
    public PutRevenueByRecognitionStartandEndDatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
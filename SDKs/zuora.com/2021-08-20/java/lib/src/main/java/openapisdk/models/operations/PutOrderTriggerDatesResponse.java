package openapisdk.models.operations;



public class PutOrderTriggerDatesResponse {
    public String contentType;
    public PutOrderTriggerDatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutOrderTriggerDatesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PutOrderTriggerDatesResponseType putOrderTriggerDatesResponseType;
    public PutOrderTriggerDatesResponse withPutOrderTriggerDatesResponseType(openapisdk.models.shared.PutOrderTriggerDatesResponseType putOrderTriggerDatesResponseType) {
        this.putOrderTriggerDatesResponseType = putOrderTriggerDatesResponseType;
        return this;
    }
    public Long statusCode;
    public PutOrderTriggerDatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
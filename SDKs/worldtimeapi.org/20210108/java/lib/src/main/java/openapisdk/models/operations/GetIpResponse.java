package openapisdk.models.operations;



public class GetIpResponse {
    public String contentType;
    public GetIpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dateTimeJsonResponse;
    public GetIpResponse withDateTimeJsonResponse(Object dateTimeJsonResponse) {
        this.dateTimeJsonResponse = dateTimeJsonResponse;
        return this;
    }
    public Object errorJsonResponse;
    public GetIpResponse withErrorJsonResponse(Object errorJsonResponse) {
        this.errorJsonResponse = errorJsonResponse;
        return this;
    }
    public Long statusCode;
    public GetIpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
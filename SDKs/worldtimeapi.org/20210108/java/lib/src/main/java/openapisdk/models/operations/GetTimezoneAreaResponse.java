package openapisdk.models.operations;



public class GetTimezoneAreaResponse {
    public String contentType;
    public GetTimezoneAreaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object errorJsonResponse;
    public GetTimezoneAreaResponse withErrorJsonResponse(Object errorJsonResponse) {
        this.errorJsonResponse = errorJsonResponse;
        return this;
    }
    public String[] listJsonResponse;
    public GetTimezoneAreaResponse withListJsonResponse(String[] listJsonResponse) {
        this.listJsonResponse = listJsonResponse;
        return this;
    }
    public Long statusCode;
    public GetTimezoneAreaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
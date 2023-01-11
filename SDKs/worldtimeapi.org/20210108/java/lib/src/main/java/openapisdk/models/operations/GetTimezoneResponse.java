package openapisdk.models.operations;



public class GetTimezoneResponse {
    public String contentType;
    public GetTimezoneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String[] listJsonResponse;
    public GetTimezoneResponse withListJsonResponse(String[] listJsonResponse) {
        this.listJsonResponse = listJsonResponse;
        return this;
    }
    public Long statusCode;
    public GetTimezoneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
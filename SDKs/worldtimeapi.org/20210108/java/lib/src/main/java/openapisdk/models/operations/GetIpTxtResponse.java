package openapisdk.models.operations;



public class GetIpTxtResponse {
    public String contentType;
    public GetIpTxtResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String dateTimeTextResponse;
    public GetIpTxtResponse withDateTimeTextResponse(String dateTimeTextResponse) {
        this.dateTimeTextResponse = dateTimeTextResponse;
        return this;
    }
    public String errorTextResponse;
    public GetIpTxtResponse withErrorTextResponse(String errorTextResponse) {
        this.errorTextResponse = errorTextResponse;
        return this;
    }
    public Long statusCode;
    public GetIpTxtResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
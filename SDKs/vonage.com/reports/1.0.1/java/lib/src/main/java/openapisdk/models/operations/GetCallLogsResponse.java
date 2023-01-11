package openapisdk.models.operations;



public class GetCallLogsResponse {
    public openapisdk.models.shared.CallLogsHalResponse callLogsHalResponse;
    public GetCallLogsResponse withCallLogsHalResponse(openapisdk.models.shared.CallLogsHalResponse callLogsHalResponse) {
        this.callLogsHalResponse = callLogsHalResponse;
        return this;
    }
    public String contentType;
    public GetCallLogsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCallLogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorsResponse validationErrorsResponse;
    public GetCallLogsResponse withValidationErrorsResponse(openapisdk.models.shared.ValidationErrorsResponse validationErrorsResponse) {
        this.validationErrorsResponse = validationErrorsResponse;
        return this;
    }
}
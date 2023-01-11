package openapisdk.models.operations;



public class UpdateCiscoSwitchResponse {
    public openapisdk.models.shared.ApiError apiError;
    public UpdateCiscoSwitchResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public openapisdk.models.shared.CiscoSwitchDataSource ciscoSwitchDataSource;
    public UpdateCiscoSwitchResponse withCiscoSwitchDataSource(openapisdk.models.shared.CiscoSwitchDataSource ciscoSwitchDataSource) {
        this.ciscoSwitchDataSource = ciscoSwitchDataSource;
        return this;
    }
    public String contentType;
    public UpdateCiscoSwitchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateCiscoSwitchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
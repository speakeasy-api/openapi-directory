package openapisdk.models.operations;



public class ExtensionCtrlGetAccountExtensionsResponse {
    public String contentType;
    public ExtensionCtrlGetAccountExtensionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EndUserRouteHalResponse endUserRouteHalResponse;
    public ExtensionCtrlGetAccountExtensionsResponse withEndUserRouteHalResponse(openapisdk.models.shared.EndUserRouteHalResponse endUserRouteHalResponse) {
        this.endUserRouteHalResponse = endUserRouteHalResponse;
        return this;
    }
    public Long statusCode;
    public ExtensionCtrlGetAccountExtensionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorsResponse validationErrorsResponse;
    public ExtensionCtrlGetAccountExtensionsResponse withValidationErrorsResponse(openapisdk.models.shared.ValidationErrorsResponse validationErrorsResponse) {
        this.validationErrorsResponse = validationErrorsResponse;
        return this;
    }
}
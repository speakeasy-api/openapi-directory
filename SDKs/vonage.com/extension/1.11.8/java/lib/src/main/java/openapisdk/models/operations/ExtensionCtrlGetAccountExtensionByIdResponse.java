package openapisdk.models.operations;



public class ExtensionCtrlGetAccountExtensionByIdResponse {
    public String contentType;
    public ExtensionCtrlGetAccountExtensionByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EndUserRouteHalResponse endUserRouteHalResponse;
    public ExtensionCtrlGetAccountExtensionByIdResponse withEndUserRouteHalResponse(openapisdk.models.shared.EndUserRouteHalResponse endUserRouteHalResponse) {
        this.endUserRouteHalResponse = endUserRouteHalResponse;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public ExtensionCtrlGetAccountExtensionByIdResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public ExtensionCtrlGetAccountExtensionByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
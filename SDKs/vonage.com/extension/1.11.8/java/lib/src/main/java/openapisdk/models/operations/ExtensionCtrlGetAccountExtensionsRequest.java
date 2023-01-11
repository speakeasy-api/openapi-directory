package openapisdk.models.operations;



public class ExtensionCtrlGetAccountExtensionsRequest {
    public ExtensionCtrlGetAccountExtensionsPathParams pathParams;
    public ExtensionCtrlGetAccountExtensionsRequest withPathParams(ExtensionCtrlGetAccountExtensionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ExtensionCtrlGetAccountExtensionsQueryParams queryParams;
    public ExtensionCtrlGetAccountExtensionsRequest withQueryParams(ExtensionCtrlGetAccountExtensionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExtensionCtrlGetAccountExtensionsSecurity security;
    public ExtensionCtrlGetAccountExtensionsRequest withSecurity(ExtensionCtrlGetAccountExtensionsSecurity security) {
        this.security = security;
        return this;
    }
}
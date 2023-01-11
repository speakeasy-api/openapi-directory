package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtensionCtrlGetAccountExtensionsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=bearer")
    public openapisdk.models.shared.SchemeBearerAuth bearerAuth;
    public ExtensionCtrlGetAccountExtensionsSecurity withBearerAuth(openapisdk.models.shared.SchemeBearerAuth bearerAuth) {
        this.bearerAuth = bearerAuth;
        return this;
    }
}
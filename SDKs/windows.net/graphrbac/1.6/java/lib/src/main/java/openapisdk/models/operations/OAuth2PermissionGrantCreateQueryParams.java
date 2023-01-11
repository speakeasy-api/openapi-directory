package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OAuth2PermissionGrantCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public OAuth2PermissionGrantCreateQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SignedInUserGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public SignedInUserGetQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
}
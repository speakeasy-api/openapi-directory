package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public UsersUpdateQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
}
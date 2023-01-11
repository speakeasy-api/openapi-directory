package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsIsMemberOfQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public GroupsIsMemberOfQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
}
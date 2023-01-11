package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public GroupsCreateQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
}
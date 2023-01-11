package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersGetMemberGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public UsersGetMemberGroupsQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccessTokensQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=appIds")
    public String appIds;
    public GetAccessTokensQueryParams withAppIds(String appIds) {
        this.appIds = appIds;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OAuth2PermissionGrantListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$filter")
    public String dollarFilter;
    public OAuth2PermissionGrantListQueryParams withDollarFilter(String dollarFilter) {
        this.dollarFilter = dollarFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public OAuth2PermissionGrantListQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
}
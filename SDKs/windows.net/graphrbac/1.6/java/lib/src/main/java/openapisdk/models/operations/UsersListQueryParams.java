package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$expand")
    public String dollarExpand;
    public UsersListQueryParams withDollarExpand(String dollarExpand) {
        this.dollarExpand = dollarExpand;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$filter")
    public String dollarFilter;
    public UsersListQueryParams withDollarFilter(String dollarFilter) {
        this.dollarFilter = dollarFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$top")
    public Long dollarTop;
    public UsersListQueryParams withDollarTop(Long dollarTop) {
        this.dollarTop = dollarTop;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public UsersListQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filterBy")
    public String filterBy;
    public GetAssetsQueryParams withFilterBy(String filterBy) {
        this.filterBy = filterBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderBy")
    public GetAssetsOrderByEnum orderBy;
    public GetAssetsQueryParams withOrderBy(GetAssetsOrderByEnum orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetAssetsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetAssetsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortDirection")
    public GetAssetsSortDirectionEnum sortDirection;
    public GetAssetsQueryParams withSortDirection(GetAssetsSortDirectionEnum sortDirection) {
        this.sortDirection = sortDirection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public openapisdk.models.shared.AssetStatusQueryParamEnum status;
    public GetAssetsQueryParams withStatus(openapisdk.models.shared.AssetStatusQueryParamEnum status) {
        this.status = status;
        return this;
    }
}
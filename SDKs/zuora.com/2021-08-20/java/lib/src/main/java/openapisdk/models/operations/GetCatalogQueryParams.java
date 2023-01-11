package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCatalogQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetCatalogQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetCatalogQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}
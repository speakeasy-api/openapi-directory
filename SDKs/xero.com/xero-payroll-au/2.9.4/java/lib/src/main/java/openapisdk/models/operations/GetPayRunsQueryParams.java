package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayRunsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public String order;
    public GetPayRunsQueryParams withOrder(String order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetPayRunsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=where")
    public String where;
    public GetPayRunsQueryParams withWhere(String where) {
        this.where = where;
        return this;
    }
}
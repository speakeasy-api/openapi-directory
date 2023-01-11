package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStatementsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetStatementsQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Integer pageSize;
    public GetStatementsQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}
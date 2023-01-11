package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllAccountingCodesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetAllAccountingCodesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}
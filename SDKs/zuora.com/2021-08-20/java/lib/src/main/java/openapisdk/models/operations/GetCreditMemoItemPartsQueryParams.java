package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreditMemoItemPartsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetCreditMemoItemPartsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}
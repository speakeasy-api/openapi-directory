package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConfiguredInvestmentProductsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_number")
    public String pageNumber;
    public GetConfiguredInvestmentProductsQueryParams withPageNumber(String pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public String pageSize;
    public GetConfiguredInvestmentProductsQueryParams withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public GetConfiguredInvestmentProductsStatusEnum status;
    public GetConfiguredInvestmentProductsQueryParams withStatus(GetConfiguredInvestmentProductsStatusEnum status) {
        this.status = status;
        return this;
    }
}
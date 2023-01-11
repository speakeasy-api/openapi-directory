package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConfiguredInvestmentProductPricesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_number")
    public String pageNumber;
    public GetConfiguredInvestmentProductPricesQueryParams withPageNumber(String pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public String pageSize;
    public GetConfiguredInvestmentProductPricesQueryParams withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public GetConfiguredInvestmentProductPricesStatusEnum status;
    public GetConfiguredInvestmentProductPricesQueryParams withStatus(GetConfiguredInvestmentProductPricesStatusEnum status) {
        this.status = status;
        return this;
    }
}
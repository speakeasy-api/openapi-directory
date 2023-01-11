package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomExchangeRatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate")
    public String endDate;
    public GetCustomExchangeRatesQueryParams withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate")
    public String startDate;
    public GetCustomExchangeRatesQueryParams withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}
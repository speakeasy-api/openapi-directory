package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRatesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rate_type")
    public GetRatesRateTypeEnum rateType;
    public GetRatesPathParams withRateType(GetRatesRateTypeEnum rateType) {
        this.rateType = rateType;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CashinQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cashInValue")
    public Double cashInValue;
    public CashinQueryParams withCashInValue(Double cashInValue) {
        this.cashInValue = cashInValue;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cashinBetDelayId")
    public String cashinBetDelayId;
    public CashinQueryParams withCashinBetDelayId(String cashinBetDelayId) {
        this.cashinBetDelayId = cashinBetDelayId;
        return this;
    }
}
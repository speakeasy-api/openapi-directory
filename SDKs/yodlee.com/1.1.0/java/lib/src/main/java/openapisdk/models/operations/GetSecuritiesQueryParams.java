package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSecuritiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=holdingId")
    public String holdingId;
    public GetSecuritiesQueryParams withHoldingId(String holdingId) {
        this.holdingId = holdingId;
        return this;
    }
}
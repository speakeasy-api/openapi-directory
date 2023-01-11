package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPotTransactionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pot_id")
    public String potId;
    public GetPotTransactionsPathParams withPotId(String potId) {
        this.potId = potId;
        return this;
    }
}
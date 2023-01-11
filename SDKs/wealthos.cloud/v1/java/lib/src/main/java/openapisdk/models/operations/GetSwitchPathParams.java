package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSwitchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=switch_transaction_id")
    public String switchTransactionId;
    public GetSwitchPathParams withSwitchTransactionId(String switchTransactionId) {
        this.switchTransactionId = switchTransactionId;
        return this;
    }
}
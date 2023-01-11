package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetCreditBalanceAdjustmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ObjectGetCreditBalanceAdjustmentPathParams withId(String id) {
        this.id = id;
        return this;
    }
}
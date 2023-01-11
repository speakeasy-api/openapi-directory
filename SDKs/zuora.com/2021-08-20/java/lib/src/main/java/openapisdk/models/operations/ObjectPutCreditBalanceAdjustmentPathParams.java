package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutCreditBalanceAdjustmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ObjectPutCreditBalanceAdjustmentPathParams withId(String id) {
        this.id = id;
        return this;
    }
}
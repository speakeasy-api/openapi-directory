package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetCreditBalanceAdjustmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ObjectGetCreditBalanceAdjustmentQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
}
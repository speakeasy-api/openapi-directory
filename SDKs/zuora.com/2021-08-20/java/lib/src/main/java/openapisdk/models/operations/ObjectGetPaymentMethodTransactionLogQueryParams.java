package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetPaymentMethodTransactionLogQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ObjectGetPaymentMethodTransactionLogQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetSubscriptionProductFeatureQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ObjectGetSubscriptionProductFeatureQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
}
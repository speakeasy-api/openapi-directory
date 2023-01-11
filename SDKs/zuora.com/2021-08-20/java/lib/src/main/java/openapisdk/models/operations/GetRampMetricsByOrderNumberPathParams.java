package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRampMetricsByOrderNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=orderNumber")
    public String orderNumber;
    public GetRampMetricsByOrderNumberPathParams withOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
        return this;
    }
}
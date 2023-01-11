package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderMetricsforEvergreenSubscriptionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=orderNumber")
    public String orderNumber;
    public GetOrderMetricsforEvergreenSubscriptionPathParams withOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscriptionNumber")
    public String subscriptionNumber;
    public GetOrderMetricsforEvergreenSubscriptionPathParams withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscriptionNumber")
    public String subscriptionNumber;
    public PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionPathParams withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}
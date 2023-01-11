package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrdersBySubscriptionOwnerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountNumber")
    public String accountNumber;
    public GetOrdersBySubscriptionOwnerPathParams withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
}
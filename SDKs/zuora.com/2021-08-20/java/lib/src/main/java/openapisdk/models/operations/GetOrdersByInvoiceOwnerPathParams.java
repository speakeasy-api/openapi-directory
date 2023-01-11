package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrdersByInvoiceOwnerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountNumber")
    public String accountNumber;
    public GetOrdersByInvoiceOwnerPathParams withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
}
package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class AccountBillingInvoicesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public LocalDate from;
    public AccountBillingInvoicesQueryParams withFrom(LocalDate from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public LocalDate to;
    public AccountBillingInvoicesQueryParams withTo(LocalDate to) {
        this.to = to;
        return this;
    }
}
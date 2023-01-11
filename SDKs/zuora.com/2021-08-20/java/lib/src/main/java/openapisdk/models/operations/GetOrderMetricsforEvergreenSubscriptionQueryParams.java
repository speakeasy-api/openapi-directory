package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderMetricsforEvergreenSubscriptionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate")
    public LocalDate endDate;
    public GetOrderMetricsforEvergreenSubscriptionQueryParams withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate")
    public LocalDate startDate;
    public GetOrderMetricsforEvergreenSubscriptionQueryParams withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}
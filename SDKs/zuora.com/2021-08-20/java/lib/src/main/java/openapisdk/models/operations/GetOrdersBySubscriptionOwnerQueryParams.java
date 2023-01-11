package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetOrdersBySubscriptionOwnerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dateFilterOption")
    public String dateFilterOption;
    public GetOrdersBySubscriptionOwnerQueryParams withDateFilterOption(String dateFilterOption) {
        this.dateFilterOption = dateFilterOption;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate")
    public LocalDate endDate;
    public GetOrdersBySubscriptionOwnerQueryParams withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetOrdersBySubscriptionOwnerQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetOrdersBySubscriptionOwnerQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate")
    public LocalDate startDate;
    public GetOrdersBySubscriptionOwnerQueryParams withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}
package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetOrdersBySubscriptionNumberQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dateFilterOption")
    public String dateFilterOption;
    public GetOrdersBySubscriptionNumberQueryParams withDateFilterOption(String dateFilterOption) {
        this.dateFilterOption = dateFilterOption;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate")
    public LocalDate endDate;
    public GetOrdersBySubscriptionNumberQueryParams withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetOrdersBySubscriptionNumberQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetOrdersBySubscriptionNumberQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate")
    public LocalDate startDate;
    public GetOrdersBySubscriptionNumberQueryParams withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCallLogsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=destination_user")
    public String destinationUser;
    public GetCallLogsQueryParams withDestinationUser(String destinationUser) {
        this.destinationUser = destinationUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public openapisdk.models.shared.AccountIdEnum direction;
    public GetCallLogsQueryParams withDirection(openapisdk.models.shared.AccountIdEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end:gte")
    public String endGte;
    public GetCallLogsQueryParams withEndGte(String endGte) {
        this.endGte = endGte;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end:lte")
    public String endLte;
    public GetCallLogsQueryParams withEndLte(String endLte) {
        this.endLte = endLte;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public String from;
    public GetCallLogsQueryParams withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetCallLogsQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Double pageSize;
    public GetCallLogsQueryParams withPageSize(Double pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source_user")
    public String sourceUser;
    public GetCallLogsQueryParams withSourceUser(String sourceUser) {
        this.sourceUser = sourceUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start:gte")
    public String startGte;
    public GetCallLogsQueryParams withStartGte(String startGte) {
        this.startGte = startGte;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start:lte")
    public String startLte;
    public GetCallLogsQueryParams withStartLte(String startLte) {
        this.startLte = startLte;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public String to;
    public GetCallLogsQueryParams withTo(String to) {
        this.to = to;
        return this;
    }
}
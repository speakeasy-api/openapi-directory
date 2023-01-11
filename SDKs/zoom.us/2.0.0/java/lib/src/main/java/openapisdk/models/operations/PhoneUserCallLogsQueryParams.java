package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class PhoneUserCallLogsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public LocalDate from;
    public PhoneUserCallLogsQueryParams withFrom(LocalDate from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public PhoneUserCallLogsQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public PhoneUserCallLogsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=phone_number")
    public String phoneNumber;
    public PhoneUserCallLogsQueryParams withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_type")
    public PhoneUserCallLogsTimeTypeEnum timeType;
    public PhoneUserCallLogsQueryParams withTimeType(PhoneUserCallLogsTimeTypeEnum timeType) {
        this.timeType = timeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public LocalDate to;
    public PhoneUserCallLogsQueryParams withTo(LocalDate to) {
        this.to = to;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public PhoneUserCallLogsTypeEnum type;
    public PhoneUserCallLogsQueryParams withType(PhoneUserCallLogsTypeEnum type) {
        this.type = type;
        return this;
    }
}
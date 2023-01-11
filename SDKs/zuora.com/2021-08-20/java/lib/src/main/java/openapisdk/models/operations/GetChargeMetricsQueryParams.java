package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetChargeMetricsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromTimestamp")
    public OffsetDateTime fromTimestamp;
    public GetChargeMetricsQueryParams withFromTimestamp(OffsetDateTime fromTimestamp) {
        this.fromTimestamp = fromTimestamp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toTimestamp")
    public OffsetDateTime toTimestamp;
    public GetChargeMetricsQueryParams withToTimestamp(OffsetDateTime toTimestamp) {
        this.toTimestamp = toTimestamp;
        return this;
    }
}
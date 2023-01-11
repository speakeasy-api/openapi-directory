package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class PoolListPoolUsageMetricsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$filter")
    public String dollarFilter;
    public PoolListPoolUsageMetricsQueryParams withDollarFilter(String dollarFilter) {
        this.dollarFilter = dollarFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public PoolListPoolUsageMetricsQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endtime")
    public OffsetDateTime endtime;
    public PoolListPoolUsageMetricsQueryParams withEndtime(OffsetDateTime endtime) {
        this.endtime = endtime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxresults")
    public Integer maxresults;
    public PoolListPoolUsageMetricsQueryParams withMaxresults(Integer maxresults) {
        this.maxresults = maxresults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=starttime")
    public OffsetDateTime starttime;
    public PoolListPoolUsageMetricsQueryParams withStarttime(OffsetDateTime starttime) {
        this.starttime = starttime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;
    public PoolListPoolUsageMetricsQueryParams withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}
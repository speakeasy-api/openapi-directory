package openapisdk.models.operations;



public class VenueApiPostReportRequest {
    public VenueApiPostReportPathParams pathParams;
    public VenueApiPostReportRequest withPathParams(VenueApiPostReportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VenueApiPostReportQueryParams queryParams;
    public VenueApiPostReportRequest withQueryParams(VenueApiPostReportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}
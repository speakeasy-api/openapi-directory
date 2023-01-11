package openapisdk.models.operations;



public class GetPhoneRecordingsRequest {
    public GetPhoneRecordingsQueryParams queryParams;
    public GetPhoneRecordingsRequest withQueryParams(GetPhoneRecordingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPhoneRecordingsSecurity security;
    public GetPhoneRecordingsRequest withSecurity(GetPhoneRecordingsSecurity security) {
        this.security = security;
        return this;
    }
}
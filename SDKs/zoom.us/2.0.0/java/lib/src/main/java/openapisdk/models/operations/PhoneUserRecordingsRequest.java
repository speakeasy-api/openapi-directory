package openapisdk.models.operations;



public class PhoneUserRecordingsRequest {
    public PhoneUserRecordingsPathParams pathParams;
    public PhoneUserRecordingsRequest withPathParams(PhoneUserRecordingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PhoneUserRecordingsQueryParams queryParams;
    public PhoneUserRecordingsRequest withQueryParams(PhoneUserRecordingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PhoneUserRecordingsSecurity security;
    public PhoneUserRecordingsRequest withSecurity(PhoneUserRecordingsSecurity security) {
        this.security = security;
        return this;
    }
}
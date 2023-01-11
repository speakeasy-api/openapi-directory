package openapisdk.models.operations;



public class SearchCompanyContactsResponse {
    public byte[] body;
    public SearchCompanyContactsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SearchCompanyContactsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SearchCompanyContactsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SearchCompanyContacts200ApplicationJson searchCompanyContacts200ApplicationJSONObject;
    public SearchCompanyContactsResponse withSearchCompanyContacts200ApplicationJsonObject(SearchCompanyContacts200ApplicationJson searchCompanyContacts200ApplicationJSONObject) {
        this.searchCompanyContacts200ApplicationJSONObject = searchCompanyContacts200ApplicationJSONObject;
        return this;
    }
}
package openapisdk.models.operations;



public class CheckInRoomsRequest {
    public CheckInRoomsPathParams pathParams;
    public CheckInRoomsRequest withPathParams(CheckInRoomsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CheckInRoomsRequests request;
    public CheckInRoomsRequest withRequest(CheckInRoomsRequests request) {
        this.request = request;
        return this;
    }
}
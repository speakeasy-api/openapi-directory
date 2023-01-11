package openapisdk.models.operations;



public class ParticipantFeedbackRequest {
    public ParticipantFeedbackPathParams pathParams;
    public ParticipantFeedbackRequest withPathParams(ParticipantFeedbackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ParticipantFeedbackQueryParams queryParams;
    public ParticipantFeedbackRequest withQueryParams(ParticipantFeedbackQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}
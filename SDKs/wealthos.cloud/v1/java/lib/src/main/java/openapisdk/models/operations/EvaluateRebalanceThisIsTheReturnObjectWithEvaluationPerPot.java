package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot
 * contains array for pot details
**/
public class EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot {
    @JsonProperty("evaluation_response")
    public EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest[] evaluationResponse;
    public EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot withEvaluationResponse(EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest[] evaluationResponse) {
        this.evaluationResponse = evaluationResponse;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest
 * Each individual pot details on the rebalance request
**/
public class EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest {
    @JsonProperty("investor_id")
    public String investorId;
    public EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest withInvestorId(String investorId) {
        this.investorId = investorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portfolio_deviation")
    public String portfolioDeviation;
    public EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest withPortfolioDeviation(String portfolioDeviation) {
        this.portfolioDeviation = portfolioDeviation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portfolio_template_id")
    public String portfolioTemplateId;
    public EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest withPortfolioTemplateId(String portfolioTemplateId) {
        this.portfolioTemplateId = portfolioTemplateId;
        return this;
    }
    @JsonProperty("pot_id")
    public String potId;
    public EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest withPotId(String potId) {
        this.potId = potId;
        return this;
    }
    @JsonProperty("rebalance_eligibility_status")
    public EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum rebalanceEligibilityStatus;
    public EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest withRebalanceEligibilityStatus(EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum rebalanceEligibilityStatus) {
        this.rebalanceEligibilityStatus = rebalanceEligibilityStatus;
        return this;
    }
}
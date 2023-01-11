package openapisdk.models.operations;


public enum EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum {
    ELIGIBLE("eligible"),
    INELIGIBLE("ineligible"),
    NO_PORTFOLIO_ATTACHED("no_portfolio_attached"),
    NEGATIVE_HOLDINGS("negative_holdings"),
    NO_HOLDINGS("no_holdings");

    public final String value;

    private EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum(String value) {
        this.value = value;
    }
}

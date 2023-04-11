import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identifies the type of error.
 */
export declare enum ErrorTypeEnum {
    InvalidRequest = "invalid-request",
    InvalidApplication = "invalid-application",
    InvalidFeedConnection = "invalid-feed-connection",
    DuplicateStatement = "duplicate-statement",
    InvalidEndBalance = "invalid-end-balance",
    InvalidStartAndEndDate = "invalid-start-and-end-date",
    InvalidStartDate = "invalid-start-date",
    InternalError = "internal-error",
    FeedAlreadyConnectedInCurrentOrganisation = "feed-already-connected-in-current-organisation",
    InvalidEndDate = "invalid-end-date",
    StatementNotFound = "statement-not-found",
    FeedConnectedInDifferentOrganisation = "feed-connected-in-different-organisation",
    FeedAlreadyConnectedInDifferentOrganisation = "feed-already-connected-in-different-organisation",
    BankFeedNotFound = "bank-feed-not-found",
    InvalidCountrySpecified = "invalid-country-specified",
    InvalidOrganisationBankFeeds = "invalid-organisation-bank-feeds",
    InvalidOrganisationMultiCurrency = "invalid-organisation-multi-currency",
    InvalidFeedConnectionForOrganisation = "invalid-feed-connection-for-organisation",
    InvalidUserRole = "invalid-user-role",
    AccountNotValid = "account-not-valid"
}
/**
 * On error, the API consumer will receive an HTTP response with a HTTP Status Code of 4xx or 5xx and a Content-Type of application/problem+json.
 */
export declare class ErrorT extends SpeakeasyBase {
    /**
     * Human readable detailed error description.
     */
    detail?: string;
    /**
     * The numeric HTTP Status Code, e.g. 404
     */
    status?: number;
    /**
     * Human readable high level error description.
     */
    title?: string;
    /**
     * Identifies the type of error.
     */
    type?: ErrorTypeEnum;
}

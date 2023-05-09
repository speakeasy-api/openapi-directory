# bankFeeds

### Available Operations

* [createFeedConnections](#createfeedconnections) - Create one or more new feed connection
* [createStatements](#createstatements) - Creates one or more new statements
* [deleteFeedConnections](#deletefeedconnections) - Delete an existing feed connection
* [getFeedConnection](#getfeedconnection) - Retrieve single feed connection based on a unique id provided
* [getFeedConnections](#getfeedconnections) - Searches for feed connections
* [getStatement](#getstatement) - Retrieve single statement based on unique id provided
* [getStatements](#getstatements) - Retrieve all statements

## createFeedConnections

By passing in the FeedConnections array object in the body, you can create one or more new feed connections

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFeedConnectionsRequest;
import org.openapis.openapi.models.operations.CreateFeedConnectionsResponse;
import org.openapis.openapi.models.operations.CreateFeedConnectionsSecurity;
import org.openapis.openapi.models.shared.CountryCodeEnum;
import org.openapis.openapi.models.shared.CurrencyCodeEnum;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorTypeEnum;
import org.openapis.openapi.models.shared.FeedConnection;
import org.openapis.openapi.models.shared.FeedConnectionAccountTypeEnum;
import org.openapis.openapi.models.shared.FeedConnectionStatusEnum;
import org.openapis.openapi.models.shared.FeedConnections;
import org.openapis.openapi.models.shared.Pagination;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFeedConnectionsRequest req = new CreateFeedConnectionsRequest(                new FeedConnections() {{
                                items = new org.openapis.openapi.models.shared.FeedConnection[]{{
                                    add(new FeedConnection() {{
                                        accountId = "079a88ea-276d-41fb-a1f1-366ef3e22921";
                                        accountName = "Joe's Savings Account";
                                        accountNumber = "3809087654321500";
                                        accountToken = "10000123";
                                        accountType = FeedConnectionAccountTypeEnum.BANK;
                                        country = CountryCodeEnum.GB;
                                        currency = CurrencyCodeEnum.AUD;
                                        error = new Error() {{
                                            detail = "The application has not been configured to use these API endpoints.";
                                            status = 403L;
                                            title = "Invalid Application";
                                            type = ErrorTypeEnum.INVALID_APPLICATION;
                                        }};
                                        id = "0d3cf8d-95dc-4466-8dc0-47e6d1197e28";
                                        status = FeedConnectionStatusEnum.REJECTED;
                                    }}),
                                    add(new FeedConnection() {{
                                        accountId = "079a88ea-276d-41fb-a1f1-366ef3e22921";
                                        accountName = "Joe's Savings Account";
                                        accountNumber = "3809087654321500";
                                        accountToken = "10000123";
                                        accountType = FeedConnectionAccountTypeEnum.BANK;
                                        country = CountryCodeEnum.GB;
                                        currency = CurrencyCodeEnum.AUD;
                                        error = new Error() {{
                                            detail = "The application has not been configured to use these API endpoints.";
                                            status = 403L;
                                            title = "Invalid Application";
                                            type = ErrorTypeEnum.INVALID_APPLICATION;
                                        }};
                                        id = "0d3cf8d-95dc-4466-8dc0-47e6d1197e28";
                                        status = FeedConnectionStatusEnum.REJECTED;
                                    }}),
                                    add(new FeedConnection() {{
                                        accountId = "079a88ea-276d-41fb-a1f1-366ef3e22921";
                                        accountName = "Joe's Savings Account";
                                        accountNumber = "3809087654321500";
                                        accountToken = "10000123";
                                        accountType = FeedConnectionAccountTypeEnum.BANK;
                                        country = CountryCodeEnum.GB;
                                        currency = CurrencyCodeEnum.AUD;
                                        error = new Error() {{
                                            detail = "The application has not been configured to use these API endpoints.";
                                            status = 403L;
                                            title = "Invalid Application";
                                            type = ErrorTypeEnum.INVALID_APPLICATION;
                                        }};
                                        id = "0d3cf8d-95dc-4466-8dc0-47e6d1197e28";
                                        status = FeedConnectionStatusEnum.REJECTED;
                                    }}),
                                    add(new FeedConnection() {{
                                        accountId = "079a88ea-276d-41fb-a1f1-366ef3e22921";
                                        accountName = "Joe's Savings Account";
                                        accountNumber = "3809087654321500";
                                        accountToken = "10000123";
                                        accountType = FeedConnectionAccountTypeEnum.BANK;
                                        country = CountryCodeEnum.GB;
                                        currency = CurrencyCodeEnum.AUD;
                                        error = new Error() {{
                                            detail = "The application has not been configured to use these API endpoints.";
                                            status = 403L;
                                            title = "Invalid Application";
                                            type = ErrorTypeEnum.INVALID_APPLICATION;
                                        }};
                                        id = "0d3cf8d-95dc-4466-8dc0-47e6d1197e28";
                                        status = FeedConnectionStatusEnum.REJECTED;
                                    }}),
                                }};
                                pagination = new Pagination() {{
                                    itemCount = 2L;
                                    page = 1L;
                                    pageCount = 1L;
                                    pageSize = 10L;
                                }};;
                            }};, "unde");            

            CreateFeedConnectionsResponse res = sdk.bankFeeds.createFeedConnections(req, new CreateFeedConnectionsSecurity("nulla") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.feedConnections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createStatements

Creates one or more new statements

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStatementsRequest;
import org.openapis.openapi.models.operations.CreateStatementsResponse;
import org.openapis.openapi.models.operations.CreateStatementsSecurity;
import org.openapis.openapi.models.shared.CreditDebitIndicatorEnum;
import org.openapis.openapi.models.shared.EndBalance;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorTypeEnum;
import org.openapis.openapi.models.shared.Pagination;
import org.openapis.openapi.models.shared.StartBalance;
import org.openapis.openapi.models.shared.Statement;
import org.openapis.openapi.models.shared.StatementLine;
import org.openapis.openapi.models.shared.StatementStatusEnum;
import org.openapis.openapi.models.shared.Statements;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateStatementsRequest req = new CreateStatementsRequest("corrupti") {{
                statements = new Statements() {{
                    items = new org.openapis.openapi.models.shared.Statement[]{{
                        add(new Statement() {{
                            endBalance = new EndBalance() {{
                                amount = 10.1340;
                                creditDebitIndicator = CreditDebitIndicatorEnum.CREDIT;
                            }};
                            endDate = LocalDate.parse("2018-07-27");
                            errors = new org.openapis.openapi.models.shared.Error[]{{
                                add(new Error() {{
                                    detail = "The application has not been configured to use these API endpoints.";
                                    status = 403L;
                                    title = "Invalid Application";
                                    type = ErrorTypeEnum.INVALID_APPLICATION;
                                }}),
                                add(new Error() {{
                                    detail = "The application has not been configured to use these API endpoints.";
                                    status = 403L;
                                    title = "Invalid Application";
                                    type = ErrorTypeEnum.INVALID_APPLICATION;
                                }}),
                                add(new Error() {{
                                    detail = "The application has not been configured to use these API endpoints.";
                                    status = 403L;
                                    title = "Invalid Application";
                                    type = ErrorTypeEnum.INVALID_APPLICATION;
                                }}),
                            }};
                            feedConnectionId = "87cb0dc8-fa32-409c-b622-19f8de8dcc83";
                            id = "ba4f3127-5e46-427d-80ea-dea2fcd26afe";
                            startBalance = new StartBalance() {{
                                amount = 9.0000;
                                creditDebitIndicator = CreditDebitIndicatorEnum.DEBIT;
                            }};
                            startDate = LocalDate.parse("2018-07-27");
                            statementLineCount = 1L;
                            statementLines = new org.openapis.openapi.models.shared.StatementLine[]{{
                                add(new StatementLine() {{
                                    amount = 5.00;
                                    chequeNumber = "021";
                                    creditDebitIndicator = CreditDebitIndicatorEnum.CREDIT;
                                    description = "Description for statement line 2";
                                    payeeName = "Payee name for statement line 2";
                                    postedDate = LocalDate.parse("2018-06-10");
                                    reference = "Reference for statement line 2";
                                    transactionId = "transaction-id-2";
                                }}),
                                add(new StatementLine() {{
                                    amount = 5.00;
                                    chequeNumber = "021";
                                    creditDebitIndicator = CreditDebitIndicatorEnum.CREDIT;
                                    description = "Description for statement line 2";
                                    payeeName = "Payee name for statement line 2";
                                    postedDate = LocalDate.parse("2018-06-10");
                                    reference = "Reference for statement line 2";
                                    transactionId = "transaction-id-2";
                                }}),
                            }};
                            status = StatementStatusEnum.PENDING;
                        }}),
                        add(new Statement() {{
                            endBalance = new EndBalance() {{
                                amount = 10.1340;
                                creditDebitIndicator = CreditDebitIndicatorEnum.DEBIT;
                            }};
                            endDate = LocalDate.parse("2018-07-27");
                            errors = new org.openapis.openapi.models.shared.Error[]{{
                                add(new Error() {{
                                    detail = "The application has not been configured to use these API endpoints.";
                                    status = 403L;
                                    title = "Invalid Application";
                                    type = ErrorTypeEnum.INVALID_APPLICATION;
                                }}),
                            }};
                            feedConnectionId = "87cb0dc8-fa32-409c-b622-19f8de8dcc83";
                            id = "ba4f3127-5e46-427d-80ea-dea2fcd26afe";
                            startBalance = new StartBalance() {{
                                amount = 9.0000;
                                creditDebitIndicator = CreditDebitIndicatorEnum.DEBIT;
                            }};
                            startDate = LocalDate.parse("2018-07-27");
                            statementLineCount = 1L;
                            statementLines = new org.openapis.openapi.models.shared.StatementLine[]{{
                                add(new StatementLine() {{
                                    amount = 5.00;
                                    chequeNumber = "021";
                                    creditDebitIndicator = CreditDebitIndicatorEnum.CREDIT;
                                    description = "Description for statement line 2";
                                    payeeName = "Payee name for statement line 2";
                                    postedDate = LocalDate.parse("2018-06-10");
                                    reference = "Reference for statement line 2";
                                    transactionId = "transaction-id-2";
                                }}),
                                add(new StatementLine() {{
                                    amount = 5.00;
                                    chequeNumber = "021";
                                    creditDebitIndicator = CreditDebitIndicatorEnum.CREDIT;
                                    description = "Description for statement line 2";
                                    payeeName = "Payee name for statement line 2";
                                    postedDate = LocalDate.parse("2018-06-10");
                                    reference = "Reference for statement line 2";
                                    transactionId = "transaction-id-2";
                                }}),
                            }};
                            status = StatementStatusEnum.PENDING;
                        }}),
                        add(new Statement() {{
                            endBalance = new EndBalance() {{
                                amount = 10.1340;
                                creditDebitIndicator = CreditDebitIndicatorEnum.DEBIT;
                            }};
                            endDate = LocalDate.parse("2018-07-27");
                            errors = new org.openapis.openapi.models.shared.Error[]{{
                                add(new Error() {{
                                    detail = "The application has not been configured to use these API endpoints.";
                                    status = 403L;
                                    title = "Invalid Application";
                                    type = ErrorTypeEnum.INVALID_APPLICATION;
                                }}),
                                add(new Error() {{
                                    detail = "The application has not been configured to use these API endpoints.";
                                    status = 403L;
                                    title = "Invalid Application";
                                    type = ErrorTypeEnum.INVALID_APPLICATION;
                                }}),
                                add(new Error() {{
                                    detail = "The application has not been configured to use these API endpoints.";
                                    status = 403L;
                                    title = "Invalid Application";
                                    type = ErrorTypeEnum.INVALID_APPLICATION;
                                }}),
                                add(new Error() {{
                                    detail = "The application has not been configured to use these API endpoints.";
                                    status = 403L;
                                    title = "Invalid Application";
                                    type = ErrorTypeEnum.INVALID_APPLICATION;
                                }}),
                            }};
                            feedConnectionId = "87cb0dc8-fa32-409c-b622-19f8de8dcc83";
                            id = "ba4f3127-5e46-427d-80ea-dea2fcd26afe";
                            startBalance = new StartBalance() {{
                                amount = 9.0000;
                                creditDebitIndicator = CreditDebitIndicatorEnum.DEBIT;
                            }};
                            startDate = LocalDate.parse("2018-07-27");
                            statementLineCount = 1L;
                            statementLines = new org.openapis.openapi.models.shared.StatementLine[]{{
                                add(new StatementLine() {{
                                    amount = 5.00;
                                    chequeNumber = "021";
                                    creditDebitIndicator = CreditDebitIndicatorEnum.DEBIT;
                                    description = "Description for statement line 2";
                                    payeeName = "Payee name for statement line 2";
                                    postedDate = LocalDate.parse("2018-06-10");
                                    reference = "Reference for statement line 2";
                                    transactionId = "transaction-id-2";
                                }}),
                                add(new StatementLine() {{
                                    amount = 5.00;
                                    chequeNumber = "021";
                                    creditDebitIndicator = CreditDebitIndicatorEnum.CREDIT;
                                    description = "Description for statement line 2";
                                    payeeName = "Payee name for statement line 2";
                                    postedDate = LocalDate.parse("2018-06-10");
                                    reference = "Reference for statement line 2";
                                    transactionId = "transaction-id-2";
                                }}),
                            }};
                            status = StatementStatusEnum.PENDING;
                        }}),
                        add(new Statement() {{
                            endBalance = new EndBalance() {{
                                amount = 10.1340;
                                creditDebitIndicator = CreditDebitIndicatorEnum.DEBIT;
                            }};
                            endDate = LocalDate.parse("2018-07-27");
                            errors = new org.openapis.openapi.models.shared.Error[]{{
                                add(new Error() {{
                                    detail = "The application has not been configured to use these API endpoints.";
                                    status = 403L;
                                    title = "Invalid Application";
                                    type = ErrorTypeEnum.INVALID_APPLICATION;
                                }}),
                                add(new Error() {{
                                    detail = "The application has not been configured to use these API endpoints.";
                                    status = 403L;
                                    title = "Invalid Application";
                                    type = ErrorTypeEnum.INVALID_APPLICATION;
                                }}),
                                add(new Error() {{
                                    detail = "The application has not been configured to use these API endpoints.";
                                    status = 403L;
                                    title = "Invalid Application";
                                    type = ErrorTypeEnum.INVALID_APPLICATION;
                                }}),
                                add(new Error() {{
                                    detail = "The application has not been configured to use these API endpoints.";
                                    status = 403L;
                                    title = "Invalid Application";
                                    type = ErrorTypeEnum.INVALID_APPLICATION;
                                }}),
                            }};
                            feedConnectionId = "87cb0dc8-fa32-409c-b622-19f8de8dcc83";
                            id = "ba4f3127-5e46-427d-80ea-dea2fcd26afe";
                            startBalance = new StartBalance() {{
                                amount = 9.0000;
                                creditDebitIndicator = CreditDebitIndicatorEnum.CREDIT;
                            }};
                            startDate = LocalDate.parse("2018-07-27");
                            statementLineCount = 1L;
                            statementLines = new org.openapis.openapi.models.shared.StatementLine[]{{
                                add(new StatementLine() {{
                                    amount = 5.00;
                                    chequeNumber = "021";
                                    creditDebitIndicator = CreditDebitIndicatorEnum.CREDIT;
                                    description = "Description for statement line 2";
                                    payeeName = "Payee name for statement line 2";
                                    postedDate = LocalDate.parse("2018-06-10");
                                    reference = "Reference for statement line 2";
                                    transactionId = "transaction-id-2";
                                }}),
                                add(new StatementLine() {{
                                    amount = 5.00;
                                    chequeNumber = "021";
                                    creditDebitIndicator = CreditDebitIndicatorEnum.DEBIT;
                                    description = "Description for statement line 2";
                                    payeeName = "Payee name for statement line 2";
                                    postedDate = LocalDate.parse("2018-06-10");
                                    reference = "Reference for statement line 2";
                                    transactionId = "transaction-id-2";
                                }}),
                            }};
                            status = StatementStatusEnum.PENDING;
                        }}),
                    }};
                    pagination = new Pagination() {{
                        itemCount = 2L;
                        page = 1L;
                        pageCount = 1L;
                        pageSize = 10L;
                    }};;
                }};;
            }};            

            CreateStatementsResponse res = sdk.bankFeeds.createStatements(req, new CreateStatementsSecurity("perferendis") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statements != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFeedConnections

By passing in FeedConnections array object in the body, you can delete a feed connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFeedConnectionsRequest;
import org.openapis.openapi.models.operations.DeleteFeedConnectionsResponse;
import org.openapis.openapi.models.operations.DeleteFeedConnectionsSecurity;
import org.openapis.openapi.models.shared.CountryCodeEnum;
import org.openapis.openapi.models.shared.CurrencyCodeEnum;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorTypeEnum;
import org.openapis.openapi.models.shared.FeedConnection;
import org.openapis.openapi.models.shared.FeedConnectionAccountTypeEnum;
import org.openapis.openapi.models.shared.FeedConnectionStatusEnum;
import org.openapis.openapi.models.shared.FeedConnections;
import org.openapis.openapi.models.shared.Pagination;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFeedConnectionsRequest req = new DeleteFeedConnectionsRequest(                new FeedConnections() {{
                                items = new org.openapis.openapi.models.shared.FeedConnection[]{{
                                    add(new FeedConnection() {{
                                        accountId = "079a88ea-276d-41fb-a1f1-366ef3e22921";
                                        accountName = "Joe's Savings Account";
                                        accountNumber = "3809087654321500";
                                        accountToken = "10000123";
                                        accountType = FeedConnectionAccountTypeEnum.BANK;
                                        country = CountryCodeEnum.GB;
                                        currency = CurrencyCodeEnum.AUD;
                                        error = new Error() {{
                                            detail = "The application has not been configured to use these API endpoints.";
                                            status = 403L;
                                            title = "Invalid Application";
                                            type = ErrorTypeEnum.INVALID_APPLICATION;
                                        }};
                                        id = "0d3cf8d-95dc-4466-8dc0-47e6d1197e28";
                                        status = FeedConnectionStatusEnum.REJECTED;
                                    }}),
                                    add(new FeedConnection() {{
                                        accountId = "079a88ea-276d-41fb-a1f1-366ef3e22921";
                                        accountName = "Joe's Savings Account";
                                        accountNumber = "3809087654321500";
                                        accountToken = "10000123";
                                        accountType = FeedConnectionAccountTypeEnum.BANK;
                                        country = CountryCodeEnum.GB;
                                        currency = CurrencyCodeEnum.AUD;
                                        error = new Error() {{
                                            detail = "The application has not been configured to use these API endpoints.";
                                            status = 403L;
                                            title = "Invalid Application";
                                            type = ErrorTypeEnum.INVALID_APPLICATION;
                                        }};
                                        id = "0d3cf8d-95dc-4466-8dc0-47e6d1197e28";
                                        status = FeedConnectionStatusEnum.REJECTED;
                                    }}),
                                }};
                                pagination = new Pagination() {{
                                    itemCount = 2L;
                                    page = 1L;
                                    pageCount = 1L;
                                    pageSize = 10L;
                                }};;
                            }};, "repellendus");            

            DeleteFeedConnectionsResponse res = sdk.bankFeeds.deleteFeedConnections(req, new DeleteFeedConnectionsSecurity("sapiente") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.feedConnections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFeedConnection

By passing in a FeedConnection Id options, you can search for matching feed connections

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFeedConnectionRequest;
import org.openapis.openapi.models.operations.GetFeedConnectionResponse;
import org.openapis.openapi.models.operations.GetFeedConnectionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFeedConnectionRequest req = new GetFeedConnectionRequest("quo", "2ddf7cc7-8ca1-4ba9-a8fc-816742cb7392");            

            GetFeedConnectionResponse res = sdk.bankFeeds.getFeedConnection(req, new GetFeedConnectionSecurity("perferendis") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.feedConnection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFeedConnections

By passing in the appropriate options, you can search for available feed connections in the system.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFeedConnectionsRequest;
import org.openapis.openapi.models.operations.GetFeedConnectionsResponse;
import org.openapis.openapi.models.operations.GetFeedConnectionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFeedConnectionsRequest req = new GetFeedConnectionsRequest("ad") {{
                page = 1L;
                pageSize = 100L;
            }};            

            GetFeedConnectionsResponse res = sdk.bankFeeds.getFeedConnections(req, new GetFeedConnectionsSecurity("natus") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.feedConnections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStatement

By passing in a statement id, you can search for matching statements

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStatementRequest;
import org.openapis.openapi.models.operations.GetStatementResponse;
import org.openapis.openapi.models.operations.GetStatementSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStatementRequest req = new GetStatementRequest("sed", "iste", "396fea75-96eb-410f-aaa2-352c5955907a");            

            GetStatementResponse res = sdk.bankFeeds.getStatement(req, new GetStatementSecurity("doloribus") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statement != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStatements

By passing in parameters, you can search for matching statements

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStatementsRequest;
import org.openapis.openapi.models.operations.GetStatementsResponse;
import org.openapis.openapi.models.operations.GetStatementsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStatementsRequest req = new GetStatementsRequest("sapiente") {{
                xeroApplicationId = "architecto";
                xeroUserId = "mollitia";
                page = 208876;
                pageSize = 635059;
            }};            

            GetStatementsResponse res = sdk.bankFeeds.getStatements(req, new GetStatementsSecurity("consequuntur") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statements != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

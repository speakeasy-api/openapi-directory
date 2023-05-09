# sellerInvite

## Overview

Used to invite sellers and configure their accounts

### Available Operations

* [acceptSellerLead](#acceptsellerlead) - Accept Seller Lead
* [createSellerFromSellerLead](#createsellerfromsellerlead) - Create Seller From Lead
* [createSellerLead](#createsellerlead) - Invite Seller Lead
* [listSellerLeads](#listsellerleads) - List Seller Leads
* [removeSellerLead](#removesellerlead) - Delete Seller Lead
* [resendSellerLeadRequest](#resendsellerleadrequest) - Resend Seller Lead Invite
* [retrieveSellerLead](#retrievesellerlead) - Get Seller Lead's Data by Id

## acceptSellerLead

This endpoint is triggered by the seller onboarding wizard, once the seller confirms their invitation. It can be used by marketplace operators to manually accept seller leads, and carry on with their onboarding process. 

Note that there's no specific API call that allows status changes. The operations only allow the seller lead to move forward: 

 From `invite` > to `Accept` > closing on `Create Seller`.  

If you want to change the status, you can start the process again, by deleting that lead through the *Delete Seller Lead* endpoint, and resending the invite through the *Resend Seller Lead's Invite* endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptSellerLeadRequest;
import org.openapis.openapi.models.operations.AcceptSellerLeadResponse;
import org.openapis.openapi.models.shared.AcceptSellerLeadRequest;
import org.openapis.openapi.models.shared.Accountable;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam", "id") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptSellerLeadRequest req = new AcceptSellerLeadRequest("possimus",                 new AcceptSellerLeadRequest("aut",                 new Accountable("quasi", "error", "temporibus");,                 new Address("laborum", "quasi", "reiciendis", "voluptatibus", "vero", "nihil", "praesentium");, "voluptatibus", "ipsa", false, "omnis", "voluptate", "cum", "perferendis", 39187);, "reprehenderit", "ut", "maiores", "dicta");            

            AcceptSellerLeadResponse res = sdk.sellerInvite.acceptSellerLead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSellerFromSellerLead

This endpoint is used by marketplace operators to create seller accounts. The request will only accept Seller Leads whose status is `accepted`. If they are already `connected` or `invited`, the call will not be fulfilled. 

The creation of the account at VTEX is done by an internal Billing service. There is no seller account and marketplace affiliation if you do not go through this step. 

Note that there's no specific API call that allows status changes. The operations only allow the seller lead to move forward: 

 From `invite` > to `Accept` > closing on `Create Seller`.  

If you want to change the status, you can start the process again, by deleting that lead through the *Delete Seller Lead* endpoint, and resending the invite through the *Resend Seller Lead's Invite* endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSellerFromSellerLeadRequest;
import org.openapis.openapi.models.operations.CreateSellerFromSellerLeadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis", "dolore") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSellerFromSellerLeadRequest req = new CreateSellerFromSellerLeadRequest("iusto", "dicta", "harum", "enim", false, "accusamus");            

            CreateSellerFromSellerLeadResponse res = sdk.sellerInvite.createSellerFromSellerLead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSellerLead

This API is used by marketplace operators to invite sellers to join their marketplace. The request sends an email to the seller, inviting sellers to activate their store. The invitation's link in the email is unique per user, and available for only seven days for the seller to click and begin activating their store. 

The email template is completely customizable. All email templates that VTEX sends to seller leads can be found and edited in the marketplace's VTEX Admin, on the Message Center section.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSellerLeadRequest;
import org.openapis.openapi.models.operations.CreateSellerLeadResponse;
import org.openapis.openapi.models.shared.Accountable;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.CreateSellerLeadRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi", "repudiandae") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSellerLeadRequest req = new CreateSellerLeadRequest("quae", "ipsum",                 new CreateSellerLeadRequest("quidem",                 new Accountable("molestias", "excepturi", "pariatur");,                 new Address("modi", "praesentium", "rem", "voluptates", "quasi", "repudiandae", "sint");, "veritatis", "itaque", false, "incidunt", "enim", "consequatur", "est", 842342);, "explicabo", "deserunt");            

            CreateSellerLeadResponse res = sdk.sellerInvite.createSellerLead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSellerLeads

This call's response includes a list of all sellers invited by the marketplace operator to join them. Retrieved results can be filtered by adding optional query fields to the request. Each seller listed includes the following information: 

- `id` 

- `createdAt` 

- `status` 

- `isConnected` 

- `sellerEmail` 

- `sellerName` 

- `salesChannel` 

- `email`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSellerLeadsRequest;
import org.openapis.openapi.models.operations.ListSellerLeadsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio", "quibusdam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSellerLeadsRequest req = new ListSellerLeadsRequest("labore", "modi", "qui", "aliquid", "cupiditate", 552822, 20107, "magni", "assumenda", "ipsam");            

            ListSellerLeadsResponse res = sdk.sellerInvite.listSellerLeads(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeSellerLead

This endpoint permanently deletes a seller previously invited to the marketplace, if the seller has not already accepted the invitation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveSellerLeadRequest;
import org.openapis.openapi.models.operations.RemoveSellerLeadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias", "fugit") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveSellerLeadRequest req = new RemoveSellerLeadRequest("dolorum", "excepturi", "tempora", "facilis", "tempore");            

            RemoveSellerLeadResponse res = sdk.sellerInvite.removeSellerLead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resendSellerLeadRequest

This endpoint allows marketplace operators to resend an invitation to a seller lead, previously invited to join their marketplace. The request will only accept Seller Leads whose status is `invited`. If they are already `connected` or `accepted`, the call will not be fulfilled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResendSellerLeadRequestRequest;
import org.openapis.openapi.models.operations.ResendSellerLeadRequestResponse;
import org.openapis.openapi.models.shared.ResendSellerLeadRequestRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore", "delectus") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ResendSellerLeadRequestRequest req = new ResendSellerLeadRequestRequest("eum", "non",                 new ResendSellerLeadRequestRequest("eligendi");, "sint", "aliquid", "provident");            

            ResendSellerLeadRequestResponse res = sdk.sellerInvite.resendSellerLeadRequest(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveSellerLead

Marketplace operators may call this endpoint to retrieve information about a specific seller invited to the Seller Portal, by searching through their `Seller Lead Id`. To know the chosen seller's `sellerLeadId`, marketplace operators can count on the *List Sellers* endpoint's response as well. Each seller listed includes the following information: 

- `id` 

- `createdAt` 

- `status` 

- `isConnected` 

- `sellerEmail` 

- `sellerName` 

- `salesChannel` 

- `email`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveSellerLeadRequest;
import org.openapis.openapi.models.operations.RetrieveSellerLeadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus", "sint") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RetrieveSellerLeadRequest req = new RetrieveSellerLeadRequest("officia", "dolor", "debitis", "a", "dolorum");            

            RetrieveSellerLeadResponse res = sdk.sellerInvite.retrieveSellerLead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

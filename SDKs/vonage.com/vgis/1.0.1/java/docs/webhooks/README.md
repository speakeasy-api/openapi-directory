# webhooks

## Overview

Webhooks are external URLs which subscribe to receive events via HTTP POST for a specified set of events.

### Available Operations

* [createWebhook](#createwebhook) - Create a new webhook subscription
* [destroyWebhook](#destroywebhook) - Remove a web hook
* [listWebhooks](#listwebhooks) - List web hooks
* [renewWebhook](#renewwebhook) - Renews a web hook
* [viewWebhook](#viewwebhook) - Get web hook details

## createWebhook

Create a new webhook subscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWebhookResponse;
import org.openapis.openapi.models.shared.WebhookCreate;
import org.openapis.openapi.models.shared.WebhookCreateEventsEnum;
import org.openapis.openapi.models.shared.WebhookCreateMetadataPolicyEnum;
import org.openapis.openapi.models.shared.WebhookCreateSigningAlgoEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.WebhookCreate req = new WebhookCreate() {{
                events = new org.openapis.openapi.models.shared.WebhookCreateEventsEnum[]{{
                    add(WebhookCreateEventsEnum.CALL),
                    add(WebhookCreateEventsEnum.CALL),
                    add(WebhookCreateEventsEnum.CALL),
                    add(WebhookCreateEventsEnum.CALL),
                }};
                metadataPolicy = WebhookCreateMetadataPolicyEnum.NONE;
                signingAlgo = WebhookCreateSigningAlgoEnum.HMAC_SHA256;
                signingKey = "sapiente";
                url = "https://www.example.com";
            }};            

            CreateWebhookResponse res = sdk.webhooks.createWebhook(req);

            if (res.webhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destroyWebhook

Remove a web hook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DestroyWebhookRequest;
import org.openapis.openapi.models.operations.DestroyWebhookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DestroyWebhookRequest req = new DestroyWebhookRequest("quo");            

            DestroyWebhookResponse res = sdk.webhooks.destroyWebhook(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWebhooks

List web hooks

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWebhooksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListWebhooksResponse res = sdk.webhooks.listWebhooks();

            if (res.webhooks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## renewWebhook

Renews a web hook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RenewWebhookRequest;
import org.openapis.openapi.models.operations.RenewWebhookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RenewWebhookRequest req = new RenewWebhookRequest("odit");            

            RenewWebhookResponse res = sdk.webhooks.renewWebhook(req);

            if (res.webhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## viewWebhook

Get web hook details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ViewWebhookRequest;
import org.openapis.openapi.models.operations.ViewWebhookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ViewWebhookRequest req = new ViewWebhookRequest("at");            

            ViewWebhookResponse res = sdk.webhooks.viewWebhook(req);

            if (res.webhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
